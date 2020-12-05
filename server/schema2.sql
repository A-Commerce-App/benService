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

