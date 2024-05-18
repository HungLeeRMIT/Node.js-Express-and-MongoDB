const { default: axios } = require('axios');
const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');

exports.getLanding = (req, res, next) => {
  res.status(200).render('index', {
    title: 'Welcome to Natours',
  });
};

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await axios.get('http://127.0.0.1:8000/api/v1/tours');

  res.status(200).render('overview', {
    title: 'All Tours',
    tours: tours.data.data.data,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name.', 404));
  }

  res.status(200).render('tour', {
    title: tour.name,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create your account',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};

exports.getBase = async (req, res) => {
  res.status(200).render('contact', {
    title: 'Your account',
  });
};

exports.getAbout = async (req, res) => {
  res.status(200).render('about', {
    title: 'Your account',
  });
};

exports.getContact = async (req, res) => {
  res.status(200).render('contact', {
    title: 'Your account',
  });
};
