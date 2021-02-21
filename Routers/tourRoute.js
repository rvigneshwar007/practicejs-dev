const express = require('express');
const app = express();
app.use(express.json());

const tourController = require('./../Controller/tourController');
const tourRoute = express.Router();
tourRoute.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
tourRoute
  .route('/api/v1/tours')
  .post(tourController.createNewTour)
  .get(tourController.fetchTourData);
tourRoute
  .route('/api/v1/tours/:id')
  .get(tourController.fetchTourDataById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
module.exports = tourRoute;
