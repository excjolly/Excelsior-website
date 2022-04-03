module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4409ea481b5d3bb269d75800908827ac'),
  },
});
