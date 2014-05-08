
'use strict';

exports.index = function(req, res){

  console.log('------ my query string------');
  console.log(req.query);

  var dogs = global.nss.db.collection('dogs');
  dogs.find(req.query).toArray(function(err, records){
    res.render('dog/index', {records: records, title: 'DAWGS of Node.js'});
  });
};
