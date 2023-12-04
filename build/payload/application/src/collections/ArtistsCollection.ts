import { CollectionConfig } from 'payload/types'
import TitleField from '../fields/TitleField'
import UrlValidator from '../validators/UrlValidator'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const SongsCollection: CollectionConfig = {
  slug: 'artists',
  versions: {
    drafts: true,
    maxPerDoc: 30
  },
  access: {
    read: (): boolean => true
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'id',
      'createdAt',
      'updatedAt',
      '_status'
    ]
  },
  fields: [
    TitleField(),
    {
      type: 'richText',
      name: 'description',
      localized: true,
      required: false
    },
    {
      name: 'url',
      type: 'text',
      required: false,
      validate: UrlValidator()
    }
  ]
}

export default SongsCollection
