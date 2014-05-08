'use strict';

var d = require('../lib/request-debug');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = require('../routes/home');
  var dog = require('../routes/dog');

  app.get('/', d, home.index);
  app.get('/about', home.about);
  app.get('/faq', home.faq);
  app.get('/photo', home.photo);

  app.get('/dogs', dog.index);

  console.log('Routes Loaded');
  fn();
}
