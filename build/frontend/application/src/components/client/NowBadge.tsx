'use client'
import { ReactElement } from 'react'
import { useNowSettings } from './context/NowSettingsContext'
import Badge from '../server/Badge'
import Icon from '../server/Icon'
import { Show_Program } from '../../graphql/generated/types'

export default function NowBadge ({ item }: { item: Show_Program }): ReactElement {
  const { now, loading } = useNowSettings()

  if (
    loading ||
    item === null ||
    typeof item !== 'object' ||
    item.__typename === undefined ||
    item?.id === undefined ||
    now === undefined ||
    item?.__typename !== now?.__typename ||
    item?.id !== now?.id
  ) {
    return <></>
  }
  return <Badge className={'bg-danger ms-2'}><Icon iconName={'play_arrow'}/></Badge>
}
