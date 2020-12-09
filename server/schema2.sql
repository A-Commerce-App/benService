CREATE TABLE IF NOT EXISTS products (
  id SERIAL,
  product_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL,
  user_name VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  avatar VARCHAR(2083),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL,
  product_id INT NOT NULL,
  user_id INT NOT NULL,
  overall_rating INT,
  review_date DATE,
  headline VARCHAR(100) NOT NULL,
  full_text VARCHAR(1024) NOT NULL,
  helpful INT NOT NULL,
  verified_purchase INT,
  product_photo VARCHAR(512),
  PRIMARY KEY (id)
);

COPY reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo)
FROM '/Users/ben/Documents/SDC/benService/postgresReviews.csv'
DELIMITER '|'
CSV HEADER;

COPY products(product_name)
FROM '/Users/ben/Documents/SDC/benService/postgresProducts.csv'
DELIMITER ','
CSV HEADER;

COPY users(user_name, country, avatar)
FROM '/Users/ben/Documents/SDC/benService/postgresUsers.csv'
DELIMITER '|'
CSV HEADER;