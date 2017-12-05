var origin = 'https://slack.com'

// allow configuring the url if steno is running on a non-standard port/host
if (process.env.STENO_URL) {
  origin = process.env.STENO_URL
}

module.exports = origin
