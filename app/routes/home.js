
'use strict';

exports.index = function(req, res){
  res.render('home/index', {name:'Bob', age:7, gender:'Maile', title: 'Welcome to Node.js'});
};

exports.about = function(req, res){
  res.render('home/about', {title: 'About Node.js'});
};

exports.faq = function(req, res){
  res.render('home/faq', {title: 'FAQs Node.js'});
};

exports.photo = function(req, res){
  var pics = ['node1.jpg', 'node2.jpg', 'node3.png'];
  res.render('home/photo', {pics: pics, title: 'Photos Node.js'});
};
