import { ReactElement } from 'react'
import { Show_Program_Relation } from '../../graphql/generated/types'
import ShowProgramSummary from './ShowProgramSummary'
import NowBadge from '../client/NowBadge'

export default function ShowProgramList ({ program, showId }: {
  program: Show_Program_Relation[] | undefined | null
  showId: string
}): ReactElement {
  if (program === null || program === undefined) {
    return <></>
  }
  return <ol className="list-group list-group-numbered">
    {program.map(
      (program) => {
        return (<li className={'list-group-item'}>
            <ShowProgramSummary item={program.value} showId={showId} key={program.value.id}/>
            <NowBadge item={program.value}/>
          </li>
        )
      }
    )}
  </ol>
}
