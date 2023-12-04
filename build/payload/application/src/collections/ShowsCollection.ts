import { CollectionConfig } from 'payload/types'
import TitleField from '../fields/TitleField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const SongsCollection: CollectionConfig = {
  slug: 'shows',
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
      type: 'relationship',
      name: 'performers',
      relationTo: ['performers'],
      hasMany: true,
      required: false,
      admin: {
        isSortable: true
      }
    },
    {
      type: 'relationship',
      name: 'program',
      relationTo: ['songs', 'performances'],
      hasMany: true,
      required: false,
      admin: {
        isSortable: true,
        className: 'program'
      }
    }
  ]
}

export default SongsCollection
