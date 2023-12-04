import express from 'express'
import payload from 'payload'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async (): Promise<void> => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET ?? '',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
  })

  // Add your own express routes here

  app.listen(3000)
}

void start()
