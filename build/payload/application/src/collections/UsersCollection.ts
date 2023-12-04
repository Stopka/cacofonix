import { CollectionConfig } from 'payload/types'

const UsersCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  fields: [
    // Email added by default
  ]
}

export default UsersCollection
