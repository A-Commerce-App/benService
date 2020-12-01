import React from 'react';

// 1. Embed the images directly in the code (put them in the dist folder, eliminate the network requests entirely)
// You'll need to update your webpack config to include a loader for svg files to push it into your dist folder (your dist folder is regenerated every time you run your build script)
// 2. Use an SVG instead of a PNG (much smaller, won't pixelate)
// In webpack, make a rule that includes a svg loader and creates a new img folder in the dist folder that mirrors your src folder structure

// Or, make functional component to generate the stars, thus avoiding the need to include an svg loader in your build system. You'll need to store the actual path text for the SVG (really long weird looking sequence of numbers)
// Eliminate the need for network requests ($$$ savings)

// Make sure your S3 Buckets are secure

const Stars = ({rating, height}) => {
  return (
    <div>
      {[...Array(5)].map((item, index) => {
        let star = rating - index;
        let typeOfStar;
        if (star >= 0.8) {
          typeOfStar = 1; // full
        } else if (star >= 0.21) {
          typeOfStar = 2; // half
        } else {
          typeOfStar = 3; // empty
        }
        return <img key={index} src={`https://hr-fec.s3.us-east-2.amazonaws.com/amz-star-pngs/${typeOfStar}.png`} style={{height: height}}></img>
      })}
    </div>
  )
};

export default Stars;
