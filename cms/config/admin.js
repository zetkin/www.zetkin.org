module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "e7572fecd66d651427d24c3917ca7135"),
  },
});
