module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '35d22b316e725e094651d4caeb54a267'),
  },
});
