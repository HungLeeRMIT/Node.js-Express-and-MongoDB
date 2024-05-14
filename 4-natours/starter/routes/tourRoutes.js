const express = require('express');

const toursController = require('../controllers/tourController');
const reviewRouter = require('./reviewRoutes');

const authController = require('../controllers/authController');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-tours')
  .get(toursController.aliasTopTours, toursController.getAllTours);

router.route('/tour-stats').get(toursController.getTourStats);

router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    toursController.getMonthlyPlan,
  );

router
  .route('/')
  .get(toursController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo(
      'admin',
      'lead-guide',
      toursController.createTour,
    ),
  );

router
  .route('/:id')
  .get(toursController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo(
      'admin',
      'lead-guide',
      toursController.updateTour,
    ),
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    toursController.deleteTour,
  );

module.exports = router;
