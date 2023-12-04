import { Field } from 'payload/types'

const ImageField = (): Field => ({
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  filterOptions: {
    mimeType: { contains: 'image' }
  },
  required: true
})

export default ImageField
