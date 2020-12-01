const express = require('express');
const db = require('./db');
const morgan = require('morgan');

const app = express();

// Serve static index.html file
app.use(express.static('client/dist'));

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Get all reviews for product ID
app.get('/api/reviews/:id', (req, res) => {
  // console.log(req.params.id);
  console.log('request was made here-------');
  db.query(`SELECT reviews.product_id, reviews.user_id, reviews.overall_rating, reviews.review_date, reviews.headline, reviews.full_text, reviews.helpful, reviews.verified_purchase, reviews.product_photo, users.user_name, users.country, users.avatar FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=?`, [req.params.id], (err, results) => {
    if (err) {
      res.status(404).send('There was an error in accessing the database');
    } else {
      res.status(200).json(results);
    }
  });
});

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

