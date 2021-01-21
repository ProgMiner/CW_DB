
CREATE TABLE cat_breed
(
	id SERIAL PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL,
	price INT NOT NULL CHECK (price > 0) DEFAULT 20000
);

CREATE TABLE client
(
	id	SERIAL PRIMARY KEY,
	name VARCHAR(1023) NOT NULL,
	discount NUMERIC NOT NULL DEFAULT 0.05 CHECK (discount >0 and discount < 1)
);

CREATE TABLE cat
(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	breed_id INT REFERENCES cat_breed (id) ON DELETE SET NULL,
	birthday TIMESTAMP,
	sex CHAR(1) NOT NULL CHECK (sex = 'M' OR sex = 'F'),
	color INT NOT NULL CHECK (color >= 0 AND color < 16777216),
	owner_id INT REFERENCES client (id)ON DELETE CASCADE
);

CREATE TABLE room
(
	room_number NUMERIC PRIMARY KEY,
	amount_of_places NUMERIC NOT NULL,
	price NUMERIC NOT NULL CHECK (price > 0)
);

CREATE TABLE room_occupation
(
	room_number INT REFERENCES room (room_number) ON DELETE CASCADE NOT NULL,
	cat_id BIGINT REFERENCES cat (id) ON DELETE CASCADE UNIQUE NOT NULL,
	PRIMARY KEY (room_number, cat_id)
);

CREATE TABLE good
(
	id	SERIAL PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL,
	price NUMERIC NOT NULL CHECK (price > 0),
	type VARCHAR NOT NULL
);

CREATE TABLE food
(
	id	SERIAL PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL,
	good_id INT REFERENCES good (id) ON DELETE CASCADE
);

CREATE TABLE allergen
(
	id SERIAL PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE cat_allergen
(
	cat_id BIGINT REFERENCES cat(id) ON DELETE CASCADE,
	allergen_id INT REFERENCES allergen(id) ON DELETE CASCADE,
	PRIMARY KEY(cat_id, allergen_id)
);

CREATE TABLE food_allergen
(
	food_id INT REFERENCES food(id) ON DELETE CASCADE,
	allergen_id INT REFERENCES allergen(id) ON DELETE CASCADE,
	PRIMARY KEY(food_id, allergen_id)
);

CREATE TABLE food_preference
(
	food_id INT REFERENCES food (id) ON DELETE CASCADE NOT NULL,
	cat_id INT REFERENCES cat (id) ON DELETE CASCADE NOT NULL,
	PRIMARY KEY(food_id, cat_id)
);

CREATE TABLE illness
(
	id	SERIAL PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL,
	sypthoms TEXT NOT NULL,
	treatment TEXT
);

CREATE TABLE employer
(
	id	SERIAL PRIMARY KEY,
	name VARCHAR(1023) NOT NULL,
	birthday TIMESTAMP NOT NULL,
	salary NUMERIC NOT NULL,
	employing_date TIMESTAMP NOT NULL
);

CREATE TABLE shelter_employer
(
	id	SERIAL PRIMARY KEY,
	employer_id INT REFERENCES employer (id) ON DELETE CASCADE UNIQUE NOT NULL,
	position TEXT NOT NULL
);

CREATE TABLE shop_employer
(
	id	SERIAL PRIMARY KEY,
	employer_id INT REFERENCES employer (id) ON DELETE CASCADE UNIQUE NOT NULL,
	position TEXT NOT NULL
);

CREATE TABLE stylist
(
	id	SERIAL PRIMARY KEY,
	employer_id INT REFERENCES employer (id) ON DELETE CASCADE UNIQUE NOT NULL,
	position TEXT NOT NULL
);

CREATE TABLE style_service
(
	id	SERIAL PRIMARY KEY,
	type VARCHAR UNIQUE NOT NULL,
	price NUMERIC NOT NULL CHECK (price > 0)
);

CREATE TABLE beauty_salon_registration
(
	id	SERIAL PRIMARY KEY,
	stylist_id INT REFERENCES stylist (id) ON DELETE CASCADE NOT NULL,
	service_id INT REFERENCES style_service (id) ON DELETE CASCADE NOT NULL,
	reception_time TIMESTAMP NOT NULL,
	client_id INT REFERENCES client (id) ON DELETE CASCADE NOT NULL,
	cat_id BIGINT REFERENCES cat(id) ON DELETE SET NULL,
	UNIQUE(stylist_id, reception_time)
);

CREATE TABLE doctor
(
	id	SERIAL PRIMARY KEY,
	employer_id INT REFERENCES employer (id) ON DELETE CASCADE UNIQUE NOT NULL,
	position TEXT NOT NULL
);

CREATE TABLE treatment_service
(
	id	SERIAL PRIMARY KEY,
	type VARCHAR UNIQUE NOT NULL,
	price NUMERIC NOT NULL CHECK (price > 0)
);

CREATE TABLE hospital_registration
(
	id	SERIAL PRIMARY KEY,
	doctor_id INT REFERENCES doctor (id) ON DELETE CASCADE NOT NULL,
	service_id INT REFERENCES treatment_service (id) ON DELETE CASCADE NOT NULL,
	reception_time TIMESTAMP NOT NULL,
	client_id INT REFERENCES client (id) ON DELETE CASCADE NOT NULL,
	cat_id BIGINT REFERENCES cat(id) ON DELETE SET NULL,
	UNIQUE(doctor_id, reception_time)
);

CREATE TABLE medical_history
(
	id BIGSERIAL PRIMARY KEY,
	cat_id BIGINT REFERENCES cat (id) ON DELETE CASCADE NOT NULL,
	illness_id INT REFERENCES illness (id) ON DELETE SET NULL,
	time_started TIMESTAMP NOT NULL,
	time_ended TIMESTAMP,
	doctor_id INT REFERENCES doctor (id) ON DELETE SET NULL
);
