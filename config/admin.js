module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b8cb1254294d2330aa169d59bac6657d'),
  },
});
