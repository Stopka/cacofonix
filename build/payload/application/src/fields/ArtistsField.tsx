import { Field } from 'payload/types'

const ArtistsField = (name: string): Field => ({
  type: 'relationship',
  name,
  relationTo: ['artists'],
  required: false,
  hasMany: true,
  admin: {
    isSortable: true
  }
})

export default ArtistsField
