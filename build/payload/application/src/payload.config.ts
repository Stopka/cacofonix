import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import SongsCollection from './collections/SongsCollection'
import UsersCollection from './collections/UsersCollection'
import MediaCollection from './collections/MediaCollection'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import PerformancesCollection from './collections/PerformancesCollection'
import ArtistsCollection from './collections/ArtistsCollection'
import ShowsCollection from './collections/ShowsCollection'
import PerformersCollection from './collections/PerformersCollection'
import SettingsGlobal from './globals/SettingsGlobal'
import { webpackBundler } from '@payloadcms/bundler-webpack'

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI ?? ''
  }),
  admin: {
    user: UsersCollection.slug,
    avatar: 'gravatar',
    bundler: webpackBundler(),
    css: path.resolve(__dirname, 'css/stylesheet.scss'),
    meta: {
      titleSuffix: ' - Cacofonix',
      favicon: '/harp.svg',
      ogImage: '/harp.svg'
    }
  },
  collections: [
    UsersCollection,
    SongsCollection,
    ArtistsCollection,
    PerformancesCollection,
    ShowsCollection,
    PerformersCollection,
    MediaCollection
  ],
  globals: [
    SettingsGlobal
  ],
  localization: {
    locales: [
      'en'
    ],
    defaultLocale: 'en',
    fallback: true
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disablePlaygroundInProduction: true
  },
  rateLimit: {
    trustProxy: true
  }
})
