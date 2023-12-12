import { ReactElement } from 'react'
import Icon from './Icon'
import getFlagEmoji from '../../utils/getFlagEmoji'
import { findOne } from 'country-codes-list'

export default function CountrySummary ({ country }: { country?: string | null }): ReactElement {
  if (country === undefined || country === null) {
    return <></>
  }

  // @ts-expect-error
  const name = findOne('countryCode', country)?.countryNameEn ?? country
  return <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold d-inline-block me-3">
        <Icon iconName={'flag'} className={'d-md-none'}/>
        <span className={'d-none d-md-inline'}>{'Země'}</span>
      </div>
      <ul className="card-text list-inline d-inline">
        <li className={'list-inline-item '}>{name} {getFlagEmoji(country)}</li>
      </ul>
    </div>
  </li>
}
