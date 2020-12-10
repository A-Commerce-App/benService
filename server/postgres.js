const { Client } = require('pg');

const client = new Client ({
  user: "ben",
  host: "localhost",
  password: "",
  database: "amazonreviews"
})


client.connect((err) => {
  if(err){
    console.log('Error Connecting to Postgres');
  } else {
    console.log('Successfully Connected to Postgres');
  }
});

const writeProduct = function(productName) {
  return new Promise((resolve, reject) => {
    client.query(`INSERT INTO products (product_name) VALUES ('${productName}')`, (err) => {
      if(err) {
        console.log('Error Writing Product to PostGres Products', err);
        reject(err)
      } else {
        console.log('Successfully Wrote Product to PostGres')
        resolve()
      }
    })
  })
},

readMain = function(productId) {
  return new Promise((resolve, reject) => {
    client.query(`SELECT *  FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id='${productId}'`, (err, results, fields) => {
      if(err) {
        console.log("Error Reading Main Info")
        reject(err)
      } else {
        console.log('Succesfully Read Main Info');
        resolve(results);
      }
    })
  })
},

updateProduct = function(productInfo) {
  return new Promise((resolve, reject) => {
    client.query(`UPDATE products SET product_name=('${productInfo.productNew}') WHERE product_name=('${productInfo.productOld}')`, (err) => {
      if(err) {
        console.log('Error Updating Product in PostGres', err);
        reject(err)
      } else {
        console.log('Successfully Updated Product in PostGres')
        resolve()
      }
    })
  })
},

deleteProduct = function(productName) {
  return new Promise ((resolve, reject) => {
    client.query(`DELETE FROM products WHERE product_name=('${productName}')`, (err) => {
      if(err){
        console.log('Error Deleting Product from Postgres DB')
        reject(err)
      } else {
        console.log('Successfully Deleted Product from Postgres DB')
        resolve()
      }
    })
  })
}

module.exports = {
  writeProduct,
  readMain,
  updateProduct,
  deleteProduct
}