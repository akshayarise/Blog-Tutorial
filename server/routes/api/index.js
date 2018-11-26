const router = require('express').Router();

router.use('/articles', require('./articles'));
router.use('/comments', require('./comments'));

module.exports = router;