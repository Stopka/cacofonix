import { ReactElement } from 'react'
import getFlagEmoji from '../../utils/getFlagEmoji'
import { findOne } from 'country-codes-list'

export default function CountrySummary ({ country }: { country?: string | null }): ReactElement {
  if (country === undefined || country === null) {
    return <></>
  }

  // @ts-expect-error
  const name = findOne('countryCode', country)?.countryNameEn ?? country
  return <li className={'list-inline-item emoji'}>{name} {getFlagEmoji(country)}</li>
}
