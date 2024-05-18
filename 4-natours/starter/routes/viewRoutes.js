const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');

const CSP = 'Content-Security-Policy';
const POLICY =
  "default-src 'self' https://*.mapbox.com ;" +
  "base-uri 'self';block-all-mixed-content;" +
  "font-src 'self' https: data:;" +
  "frame-ancestors 'self';" +
  "img-src http://localhost:8000 'self' blob: data:;" +
  "object-src 'none';" +
  "script-src https: cdn.jsdelivr.net cdnjs.cloudflare.com api.mapbox.com 'self' blob: ;" +
  "script-src-attr 'none';" +
  "style-src 'self' https: 'unsafe-inline';" +
  'upgrade-insecure-requests;';

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader(CSP, POLICY);
  next();
});

router.get('/', viewController.getLanding);
router.get('/overview', viewController.getOverview);
router.get('/tour/:slug', viewController.getTour);
router.get('/login', viewController.getLoginForm);
router.get('/signup', viewController.getSignupForm);
router.get('/me', authController.protect, viewController.getAccount);
router.get('/about', viewController.getAbout);
router.get('/contact', viewController.getContact);

module.exports = router;
