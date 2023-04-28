var express = require('express');
var router = express.Router();

const User = require('../models/User.model')

const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard')

/* GET users listing. */
// router.get('/profile', function (req, res, next) {
//   res.render('users/user-profile.hbs');
// });

router.get('/profile', isLoggedIn, (req, res, next) => {
  const user = req.session.user
  res.render('users/user-profile.hbs', user)
})

// router.get('/user-profile/:id', (req, res, next) => {
//   User.findById(req.params.id)
//     .then((foundUser) => {
//       console.log('found user', user)
//       res.render('users/user-profile.hbs', user)
//     })
//     .catch((err) => {
//       console.log(err)
//     })

module.exports = router;
