module.exports = ({ env }) => ({
  host: env('HOST', 'https://product-rev-strapi.vercel.app'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
