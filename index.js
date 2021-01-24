const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const port = 8000;
app.use(morgan('tiny'));
console.log(process.env);
app.listen(port, () => {
  console.log(`You are lisenting ${port} .............`);
});
const myFile = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      myFile,
    },
  });
});
// app.post("/", (req, res) => {
//   let km = [{ hfehb: "hbsbhsb" }];
//   res.status(200).send(`Hi from server post ${km}`);
// });
