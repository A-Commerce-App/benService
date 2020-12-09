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

CREATE INDEX ON reviews (product_id);
