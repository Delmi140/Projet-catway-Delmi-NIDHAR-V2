var express = require('express');
var router = express.Router();

const userRoute = require('../routes/users');
const catwaysRoute = require('../routes/catways');
const reservationRoute = require('../routes/reservations');

router.get("/", (req, res) => {
  res.render("connexion");
});


router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});  

router.get("/catways", (req, res) => {
  res.render("catways");
});  

router.get("/reservations", (req, res) => {
  res.render("reservations");
});  

router.get("/catway", (req, res) => {
  res.render("catway");
});  

router.get("/reservation", (req, res) => {
  res.render("reservation");
});  

router.get("/updateuser", (req, res) => {
  res.render("userupdate");
});  

router.get("/updatecatway", (req, res) => {
  res.render("catwayupdate");
});  


router.use('/users', userRoute);
router.use('/catways', catwaysRoute);
router.use('/reservation', reservationRoute)

module.exports = router;
