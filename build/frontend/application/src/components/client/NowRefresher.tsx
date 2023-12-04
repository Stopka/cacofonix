'use client'
import { ReactElement, useEffect } from 'react'
import { useNowSettings } from './context/NowSettingsContext'
import { Setting_Now } from '../../graphql/generated/types'
import { useRouter } from 'next/navigation'

export default function NowRefresher ({ item }: { item: Setting_Now | undefined }): ReactElement {
  const { now, loading } = useNowSettings()
  const { refresh } = useRouter()

  useEffect(() => {
    if (
      !loading && (
        now?.__typename !== item?.__typename || now?.id !== item?.id)
    ) {
      console.log('Needs refresh', {
        nowType: now?.__typename,
        nowId: now?.id,
        itemType: item?.__typename,
        itemId: item?.id
      })
      setTimeout(() => {
        refresh()
        window.scrollTo(0, 0)
      }, 0)
    }
  })

  return <></>
}
