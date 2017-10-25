var origin = 'https://slack.com'

// if in a test environment assume we're running against steno and forward
// api requests to the default port
if (process.env.NODE_ENV === 'testing') {
  origin = 'http://localhost:3000'
}

// allow configuring the url if steno is running on a non-standard port/host
if (process.env.STENO_URL) {
  origin = process.env.STENO_URL
}

module.exports = origin
