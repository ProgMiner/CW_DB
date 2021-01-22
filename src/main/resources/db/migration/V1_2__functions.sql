
-- добавить кошьку
CREATE OR REPLACE FUNCTION create_cat(
    cat_name text,
    breed_name text,
    cat_birthday timestamp,
    cat_sex char,
    cat_color int
) RETURNS bigint AS $$
DECLARE
    ret bigint;
BEGIN
    IF breed_name IS NOT NULL THEN
        INSERT INTO cat_breed(name) VALUES (breed_name) ON CONFLICT DO NOTHING;
    END IF;

    INSERT INTO cat(name, breed_id, birthday, sex, color)
        VALUES (cat_name, (SELECT id FROM cat_breed WHERE cat_breed.name = breed_name), cat_birthday, cat_sex, cat_color)
        RETURNING id INTO ret;

    RETURN ret;
    END;
$$ LANGUAGE 'plpgsql';

-- добавить беспородную кошьку
CREATE OR REPLACE FUNCTION create_mongrel_cat(
    cat_name text,
    cat_birthday timestamp,
    cat_sex char,
    cat_color int
) RETURNS bigint AS $$
DECLARE
BEGIN
    RETURN (SELECT create_cat(cat_name, NULL, cat_birthday, cat_sex, cat_color));
END;
$$ LANGUAGE 'plpgsql';

-- добавить кошьку без даты рождения
CREATE OR REPLACE FUNCTION create_no_bday_cat(
    cat_name text,
    breed_name text,
    cat_sex char,
    cat_color int
) RETURNS bigint AS $$
DECLARE
BEGIN
    RETURN (SELECT create_cat(cat_name, breed_name , NULL, cat_sex, cat_color));
END;
$$ LANGUAGE 'plpgsql';

-- добавить беспородную кошьку без даты рождения
CREATE OR REPLACE FUNCTION create_no_bday_mongrel_cat(
    cat_name text,
    cat_sex char,
    cat_color int
) RETURNS bigint AS $$
DECLARE
BEGIN
    RETURN (SELECT create_cat(cat_name, NULL, NULL, cat_sex, cat_color));
END;
$$ LANGUAGE 'plpgsql';

-- добавить породу кошьки
CREATE OR REPLACE FUNCTION create_cat_breed(
    breed_name text,
    breed_price float
) RETURNS int STRICT AS $$
DECLARE
    ret int;
BEGIN
    INSERT INTO cat_breed(name, price) VALUES (breed_name, breed_price)
        ON CONFLICT (name) DO UPDATE SET price = breed_price
        RETURNING id INTO ret;

    RETURN ret;
END;
$$ LANGUAGE 'plpgsql';

-- добавить нового клиента
CREATE OR REPLACE FUNCTION create_client(
    client_name text,
    discount_amount float
) RETURNS int STRICT AS $$
DECLARE
    ret int;
BEGIN
    INSERT INTO client(name, discount)
        VALUES (client_name, discount_amount)
        RETURNING id INTO ret;

    RETURN ret;
END;
$$ LANGUAGE 'plpgsql';

-- добавить клиента с кошькой
CREATE OR REPLACE FUNCTION create_client_with_cat(
    client_name text,
    client_discount float,
    cat_name text,
    cat_breed text,
    cat_birthday timestamp,
    cat_sex char,
    cat_color int
) RETURNS bigint AS $$
DECLARE
    ret bigint;
    owner int;
BEGIN
    owner := (SELECT create_client(client_name, client_discount));
    ret := (SELECT create_cat(cat_name, cat_breed, cat_birthday, cat_sex, cat_color));
    UPDATE cat SET owner_id = owner WHERE id = ret;

    RETURN ret;
END;
$$ LANGUAGE 'plpgsql';
