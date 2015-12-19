import env from 'node-env-file'
import path from 'path'

// loads .env variables to test locally
export default function envForTesting() {
  let mode = process.env.NODE_ENV
  let isDev = typeof mode === 'undefined' || mode === 'development'
  if (isDev) {
    env(path.join(process.cwd(), '.env'))
  }
}
