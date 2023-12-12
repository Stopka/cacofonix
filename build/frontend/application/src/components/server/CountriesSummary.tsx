import { ReactElement } from 'react'
import Icon from './Icon'
import getFlagEmoji from '../../utils/getFlagEmoji'
import { findOne } from 'country-codes-list'
import CountrySummary from './CountrySummary'

export default function CountriesSummary ({ countries }: { countries?: string[] | null }): ReactElement {
  if (countries === undefined || countries === null || countries.length === 0) {
    return <></>
  }

  // @ts-expect-error
  const name = findOne('countryCode', countries)?.countryNameEn ?? countries
  return <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold d-inline-block me-3">
        <Icon iconName={'flag'} className={'d-md-none'}/>
        <span className={'d-none d-md-inline'}>{'Země'}</span>
      </div>
      <ul className="card-text list-inline d-inline">
        {countries.map((country) => <CountrySummary country={country} />)}
      </ul>
    </div>
  </li>
}
