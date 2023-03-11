if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod.ts')
} else {
  module.exports = require('./keys_dev.ts')
}