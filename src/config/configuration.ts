export default () => ({
  host: process.env.APP_HOST,
  port: parseInt(process.env.APP_PORT, 10) || 3000,
});
