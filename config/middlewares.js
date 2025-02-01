module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
 {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['*'], // Replace * with your frontend URL for better security
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
