'use strict';

var fs = require('fs');
var async = require('async');
var webCompEntity = require('../entities/WebCompEntity');


function activate (req, res) {
    debugger;
   var result = {}

   webCompEntity.wcc.list.forEach(function(wc){
        result[wc.id] = fs.readFileSync(webCompEntity.wcc.path+'/'+wc.file,'utf8');
   });

   res.render('index',result);
}

exports.getExampleCode = activate;