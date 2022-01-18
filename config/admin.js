module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3befdca5561350cf4f8ecd8aa9b28807'),
  },
});
