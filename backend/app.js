const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res)=> {
  res.send('Hello World!');
});

app.listen(3100, () => {
  console.log("server is running on: http://localhost:3100");
});

