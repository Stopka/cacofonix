import { Field } from 'payload/types'

const TitleField = (): Field => ({
  name: 'title',
  type: 'text',
  required: true,
  unique: true,
  localized: true
})

export default TitleField
