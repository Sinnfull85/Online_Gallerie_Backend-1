const express = require('express')
const app = require("./app");
const port = 4000
require('dotenv').config();
require("./db/db")




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})