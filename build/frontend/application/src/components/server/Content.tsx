import { ReactElement } from 'react'

const Children = ({ content }: { content?: any }): ReactElement => {
  if (content === null || content === undefined || content.children === undefined || content.children === null) {
    return <></>
  }

  return content.children.map(child => <Content content={child}/>)
}

export default function Content ({ content }: { content?: any }): ReactElement {
  if (content === null || content === undefined) {
    return <></>
  }
  if (content.type === undefined && content.root !== undefined) {
    return <Content content={content.root}/>
  }
  switch (content.type) {
    case 'root':
      return <Children content={content}/>
    case 'paragraph':
      return <p><Children content={content}/></p>
    case 'linebreak':
      return <br/>
    case 'link':
      return <a href={content.url}><Children content={content}/></a>
    case 'text':
      return content.text
    default:
      console.log('Unknown content', content)
      return <></>
  }
}
