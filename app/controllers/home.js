const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Article = mongoose.model('Article');
const wechat = mongoose.model('wechat');
module.exports = function (app) {
  app.use('/', router);
};

// router.get('/', function (req, res, next) {
//   Article.find(function (err, articles) {
//     if (err) return next(err);
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
//   });
// });

const config = {
   appID = 'wx640d51f64384c56e',
   appSecret = '4c9090fd46e69f987d67c5902aedf167',
   token='weixin'; 
}
const handleWechatRequest = wechat(config,function(req,res,next){
      const message = req.weixin;
      consoel.log(message);
      res.reply('hello');
})

router.get('/', handleWechatRequest);


















