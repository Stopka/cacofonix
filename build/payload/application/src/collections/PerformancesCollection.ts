import { CollectionConfig } from 'payload/types'
import TitleField from '../fields/TitleField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const SongsCollection: CollectionConfig = {
  slug: 'performances',
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
    }
  ]
}

export default SongsCollection
