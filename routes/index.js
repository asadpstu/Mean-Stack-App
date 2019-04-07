var express = require('express');
var router = express.Router();
var baseUrl = process.env.PWD;
var Post = require('../controllers/posts');

/* Create new */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all-post', Post.allpost);
router.post('/create/new', Post.singlePost);

module.exports = router;
