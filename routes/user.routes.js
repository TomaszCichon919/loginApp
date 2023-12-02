const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(!req.user){
    const redirectPath = req.originalUrl.startsWith('/user') ? '/user/no-permission' : '/no-permission';
    res.redirect(redirectPath);
  } else {
    next();
  }
};


router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


router.get('/logged', isLogged, (req, res) => {
  const userData = req.user; 
  res.render('logged', { userData });
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

module.exports = router;
