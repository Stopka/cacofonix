import { CollectionConfig } from 'payload/types'
import TitleField from '../fields/TitleField'
import ArtistsField from '../fields/ArtistsField'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const SongsCollection: CollectionConfig = {
  slug: 'songs',
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
    ArtistsField('artists'),
    ArtistsField('musicAuthors'),
    ArtistsField('lyricsAuthors'),
    {
      type: 'richText',
      name: 'description',
      localized: true
    },
    {
      type: 'richText',
      name: 'lyrics',
      localized: true
    }
  ]
}

export default SongsCollection
