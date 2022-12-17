CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    haircolor varchar(255)
    );


CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	comment_text VARCHAR,
	user_id INTEGER REFERENCES users (id)
);