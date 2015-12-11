import env from 'node-env-file'
import path from 'path'

// loads .env variables to test locally
export default function loadEnv() {
  
  let isDev = typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === 'development'

  if (isDev) {
    env(path.join(process.cwd(), '.env'))
  }
}
