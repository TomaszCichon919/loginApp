const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {

        // // Extract username and avatar from req.user or profile data
        // const username = req.user.displayName; // Replace with your actual data
        // const avatar = req.user.photos[0].value; // Replace with your actual data
    
        // // Store this data in session or pass it to the next middleware
        // req.session.username = username;
        // req.session.avatar = avatar;
    res.redirect('/user/logged');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/logout');
});

module.exports = router;