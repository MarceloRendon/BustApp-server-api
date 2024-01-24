const express = require('express');
const paraderoRouter = require("./paraderoRouter")

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/v1', paraderoRouter);

  }
  
  module.exports = routerApi;