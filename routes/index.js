var express = require('express');
var router = express.Router();

var Post = require('../controllers/posts');

/* Create new */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all-post', Post.allpost);
router.get('/search-post/:id', Post.serachPost);
router.post('/create/new', Post.singlePost);
router.put('/search-update/:id', Post.serachAndUpdate);
router.delete('/remove/:id',Post.DeleteObject);

module.exports = router;
