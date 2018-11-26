const mongoose = require('mongoose');
const router = require('express').Router();
const Comments = mongoose.model('Comments');

router.post('/', (req, res, next) => {
  const { body } = req;

  //   if(!body.title) {
  //     return res.status(422).json({
  //       errors: {
  //         title: 'is required',
  //       },
  //     });
  //   }

  //   if(!body.author) {
  //     return res.status(422).json({
  //       errors: {
  //         author: 'is required',
  //       },
  //     });
  //   }

  //   if(!body.body) {
  //     return res.status(422).json({
  //       errors: {
  //         body: 'is required',
  //       },
  //     });
  //   }

  const finalComment = new Articles(body);
  return finalComment.save()
    .then(() => res.json({ comment: finalComment.toJSON() }))
    .catch(next);
});

router.get('/', (req, res, next) => {
  return Comments.find()
    .sort({ createdAt: 'descending' })
    .then((articles) => res.json({ comments: comments.map(article => article.toJSON()) }))
    .catch(next);
});

router.param('id', (req, res, next, id) => {
  return Comments.findById(id, (err, article) => {
    if (err) {
      return res.sendStatus(404);
    } else if (cooment) {
      req.comment = comment;
      return next();
    }
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  return res.json({
    comment: req.comment.toJSON(),
  });
});

router.patch('/:id', (req, res, next) => {
  const { body } = req;

  if (typeof body.title !== 'undefined') {
    req.comment.title = body.title;
  }

  if (typeof body.author !== 'undefined') {
    req.comment.author = body.author;
  }

  if (typeof body.body !== 'undefined') {
    req.comment.body = body.body;
  }

  return req.comment.save()
    .then(() => res.json({ comment: req.comment.toJSON() }))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  return Comments.findByIdAndRemove(req.comment._id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;