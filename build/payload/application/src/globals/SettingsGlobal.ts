import { GlobalConfig } from 'payload/types'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const SettingsGlobal: GlobalConfig = {
  slug: 'settings',
  versions: {
    drafts: true,
    max: 30
  },
  access: {
    read: (): boolean => true
  },
  admin: {

  },
  fields: [
    {
      type: 'relationship',
      name: 'show',
      relationTo: ['shows'],
      required: false
    },
    {
      type: 'relationship',
      name: 'now',
      relationTo: ['songs', 'performances'],
      required: false
    }
  ]
}

export default SettingsGlobal
