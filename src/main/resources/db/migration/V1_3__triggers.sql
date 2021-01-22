
-- триггер на то чтобы нельзя было поселить кошьку в комнату в которой не осталось места

CREATE OR REPLACE FUNCTION test_free_places_amount() RETURNS TRIGGER AS $$
DECLARE
    max_amount int;
    current_amount int;
BEGIN
    SELECT COUNT(*) FROM room_occupation
        WHERE room_occupation.room_number = NEW.room_number
        INTO current_amount;

    SELECT room.amount_of_places FROM room
        WHERE room.room_number = NEW.room_number
        INTO max_amount;

    ASSERT current_amount < max_amount;
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS check_amount ON room_occupation;
CREATE TRIGGER check_amount BEFORE INSERT OR UPDATE ON room_occupation FOR EACH ROW
    EXECUTE PROCEDURE test_free_places_amount();

-- триггеры чтобы кошьке не давали еду, на которую у ней аллергия

CREATE OR REPLACE FUNCTION remove_cat_preferences_by_food() RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM food_preference WHERE
        food_preference.food_id = NEW.food_id AND
        food_preference.cat_id IN (SELECT cat_id FROM cat_allergen
            WHERE cat_allergen.allergen_id = NEW.allergen_id);

    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS remove_preferences ON food_allergen;
CREATE TRIGGER remove_preferences BEFORE INSERT OR UPDATE ON food_allergen FOR EACH ROW
    EXECUTE PROCEDURE remove_cat_preferences_by_food();

CREATE OR REPLACE FUNCTION test_food_preferences_not_allergenes() RETURNS TRIGGER AS $$
BEGIN
    ASSERT NOT EXISTS (SELECT 1 FROM cat_allergen
        INNER JOIN food_allergen USING (allergen_id)
        WHERE cat_allergen.cat_id = NEW.cat_id AND
            food_allergen.food_id = NEW.food_id);

    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS check_allergenes ON food_preference;
CREATE TRIGGER check_allergenes BEFORE INSERT OR UPDATE ON food_preference FOR EACH ROW
    EXECUTE PROCEDURE test_food_preferences_not_allergenes();

CREATE OR REPLACE FUNCTION remove_cat_preferences_by_cat() RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM food_preference WHERE
        food_preference.cat_id = NEW.cat_id AND
        food_preference.food_id IN (SELECT food_id FROM food_allergen
            WHERE food_allergen.allergen_id = NEW.allergen_id);

    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS remove_food ON cat_allergen;
CREATE TRIGGER remove_food BEFORE INSERT OR UPDATE ON cat_allergen FOR EACH ROW
    EXECUTE PROCEDURE remove_cat_preferences_by_cat();
