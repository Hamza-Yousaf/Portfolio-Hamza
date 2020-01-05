const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://hamzayousaf.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://hamzayousaf.herokuapp.com',
  'process.env.CLIENT_ID': 'bqMfoSxuZUX0rYE2boLZAzDIP3a99Z03'
}
