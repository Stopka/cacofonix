export default function prepareMetadataTitle (title?: string): string {
  const divider = title !== undefined || title !== '' ? ' | ' : ''
  return `${title ?? ''}${divider}Cacofonix`
}
