module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 27017),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      // ssl: { rejectUnauthorized: false }
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '34.131.103.125'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'getExcelsior'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'Hrihnna@2311'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });