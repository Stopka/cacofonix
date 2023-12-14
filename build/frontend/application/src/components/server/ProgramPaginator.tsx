import { ReactElement } from 'react'
import { Show_Program, Show_Program_Relation } from '../../graphql/generated/types'
import Icon from './Icon'
import NowBadge from '../client/NowBadge'
import ShowProgramSummary from './ShowProgramSummary'
import ProgramItemLink from './ProgramItemLink'

export default function ProgramPaginator ({ item, program, showId }: {
  showId?: string | undefined
  item?: Show_Program | null
  program?: Show_Program_Relation[] | undefined | null
}): ReactElement {
  if (program === null || program === undefined || item === undefined || item === null || showId === null || showId === undefined) {
    return <></>
  }
  let previous: Show_Program | null = null
  let current: Show_Program | null = null
  let next: Show_Program | null = null
  for (const programItem of program) {
    if (item?.id === programItem.value.id && item?.__typename === programItem.value.__typename) {
      current = programItem.value
      continue
    }
    if (current !== null) {
      next = programItem.value
      break
    }
    previous = programItem.value
  }
  if (current === null) {
    previous = null
  }
  return <nav aria-label="Program navigation">
    <ul className="pagination">
      <li className={'page-item ' + (previous === null ? 'disabled' : '')}>
        <ProgramItemLink className="page-link" showId={showId} item={previous} alwaysShowLink={true}>
          <NowBadge item={previous}/>
          <Icon iconName={'navigate_before'}/>
          <span>Předchozí</span>
        </ProgramItemLink>
      </li>
      <li className={'page-item ' + (next === null ? 'disabled' : '')}>
        <ProgramItemLink className="page-link" item={next} showId={showId} alwaysShowLink={true}>
          <span>Následující</span>
          <Icon iconName={'navigate_next'}/>
          <NowBadge item={next}/>
        </ProgramItemLink>
      </li>
    </ul>
  </nav>
}
