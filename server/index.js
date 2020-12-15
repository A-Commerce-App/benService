require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
//const db = require('./db');
const postgres = require('./postgres.js');

//const mongo = require('./mongo.js');

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
app.get('/api/reviews/:id', async function (req, res) {
  try{
   //console.log("req.params", req.params.id)
   var results = await postgres.readMain(req.params.id);
   //console.log('results', results)
   res.status(200).json(results);
  } catch (err) {
    res.status(404).send(err.message);
    console.log('Error Reading Main Info')
  }
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
    console.log('req.body', req.body.user)
    await models.writeUser(req.body.user);
    res.status(200).send({});
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.post('/api/writeProduct', async function (req, res) {
  try{
    await postgres.writeProduct(req.body.product);
    res.status(200).send({});
  } catch (err) {
    res.status(404).send(err.message);
  }
});


app.put('/api/updateProductName', async function (req, res) {
  try{
    //console.log('req.body.product', req.body.product)
    await postgres.updateProduct(req.body.product)
    res.status(200).send({})
  } catch (err) {
    res.status(404).send(err.message);
  }
})

app.delete('/api/deleteProduct', async function (req, res) {
  try{
    await postgres.deleteProduct(req.body.product)
    res.status(200).send({})
  } catch (err) {
    res.status(404).send(err.message);
  }
})


const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}...`);
});

// mongo.db.on('error', () => {console.log('error connecting to DB')});
// mongo.db.once('open', function(){
//   console.log('Connected to SDC')
// });