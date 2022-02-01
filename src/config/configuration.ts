export default () => ({
  PORT: parseInt(process.env.NEST_PORT, 10) || 3000,
  SALT_ROUNDS: parseInt(process.env.NEST_SALT_ROUNDS, 10) || 10,
});
