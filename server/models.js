const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'hrstudent',
  password: '1q@W3e$R',
  database: 'amazonreviews'
});

connection.connect((err) => {
  if (err) {
    console.log('There was an error connecting to the database');
  } else {
    console.log('Successfully connected to database');
  }
});

const writeProductName = function(productName) {
  return new Promise ((resolve, reject) => {
    connection.query(`INSERT INTO products (product_name) VALUES ('${productName}')`, (err) => {
      if (err) {
        console.log('Error writing product to database');
        reject(err);
      } else {
        console.log('Successfully Wrote New Product to database');
        resolve();
      }
    })
  })
};

const writeUser = function(user) {
  return new Promise ((resolve, reject) => {
    connection.query(`INSERT INTO users (user_name, country, avatar) VALUES ('${user.uName}', '${user.uCountry}', '${user.uAvatar}')`, (err) => {
      if (err) {
        console.log('Error writing User to database');
        reject(err);
      } else {
        console.log('Successfully Wrote New User to database');
        resolve();
      }
    })
  })
};

const writeReview = function(review) {
  return new Promise ((resolve, reject) => {
    connection.query(`INSERT INTO reviews(product_id, user_id, overall_rating, review_date, headline, full_text, helpful, verified_purchase, product_photo) VALUES ('${review.pId}', '${review.uId}', '${review.oRating}', '${review.review_date}', '${review.headline}', '${review.fText}', '${review.helpful}', '${review.vPurchase}', '${review.pPhoto}')`, (err) => {
      if (err) {
        console.log('Error writing Review to database');
        reject(err);
      } else {
        console.log('Successfully Wrote Review to database');
        resolve();
      }
    })
  })
};

const updateProduct = function(productInfo) {
  return new Promise ((resolve, reject) => {
    connection.query(`UPDATE products SET product_name='${productInfo.productNew}' WHERE product_name='${productInfo.productOld}'`, (err) => {
      if (err) {
        console.log('Error updating Product Name');
        reject(err);
      } else {
        console.log('Successfully Updated Product Name');
        resolve();
      }
    })
  })
};

const deleteProduct = function(productName) {
  return new Promise ((resolve, reject) => {
    connection.query(`DELETE FROM products WHERE product_name='${productName}';)`, (err) => {
      if (err) {
        console.log('Error updating Product Name');
        reject(err);
      } else {
        console.log('Successfully Updated Product Name');
        resolve();
      }
    })
  })
};









module.exports = {
  writeProductName,
  writeUser,
  writeReview,
  updateProduct,
  deleteProduct
}