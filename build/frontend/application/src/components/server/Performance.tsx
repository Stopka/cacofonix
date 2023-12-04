import { PerformanceFragment } from '../../graphql/generated/types'
import { ReactElement } from 'react'
import Content from './Content'
import H from './H'

export default function Performance ({ performance, shiftHLevel }: { performance?: PerformanceFragment | null, shiftHLevel?: boolean }): ReactElement {
  if (performance === null || performance === undefined) {
    return <></>
  }
  return <>
    <H level={1} shiftLevel={shiftHLevel}>{performance.title}</H>

    <Content content={performance.description}/>
  </>
}
