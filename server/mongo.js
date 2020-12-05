const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdc', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
let db = mongoose.connection;


let sdcSchema = mongoose.Schema({
  repoId: {
    type: String,
    unique: true
  },
  product: {
    id: Number,
    product_name: String,
    reviews: [{
      user: {
        user_name: String,
        country: String,
        avatar: String
      },
      overall_rating: Number,
      review_Date: Date,
      headline: String,
      full_text: String,
      helpful: Number,
      verified_purchase: Number,
      product_photo: String
    }]
  }
})


let Repo = mongoose.model('Repo', sdcSchema);

// let save = (input) => {
//   console.log(`Saving ${input.length} documents to the DB`)
// }







module.exports.db = db;
