const express = require('express');
const indexRouter = require('./routes/index');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


app.listen(8088, () => {
  console.log(`Example app listening on port ${8088}`)
})

module.exports = app;
