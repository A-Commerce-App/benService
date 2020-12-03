const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const morgan = require('morgan');
const models = require('./models.js');

const app = express();

// Serve static index.html file
app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({extended: true}))
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

app.post('/api/writeReview', async function (req, res) {
  try{
    await models.writeReview(req.body.review);
    res.status(200).send({});
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.post('/api/writeUser', async function (req, res) {
  try{
    await models.writeReview(req.body.user);
    res.status(200).send({});
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.post('/api/writeProduct', async function (req, res) {
  try{
    await models.writeProductName(req.body.product);
    res.status(200).send({});
  } catch (err) {
    res.status(404).send(err.message);
  }
});


app.put('/api/updateProductName', async function (req, res) {
  try{
    await models.updateProduct(req.body.product)
    res.status(200).send({})
  } catch (err) {
    res.status(404).send(err.message);
  }
})

app.delete('/api/deleteProduct', async function (req, res) {
  try{
    await models.deleteProduct(req.body.product)
    res.status(200).send({})
  } catch (err) {
    res.status(404).send(err.message);
  }
})


const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

