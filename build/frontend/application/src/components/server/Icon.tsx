import React, { ReactElement } from 'react'
import 'material-symbols/outlined.scss'

const Icon = ({ iconName, className }: { iconName: string, className?: string }): ReactElement => (
  <span className={'material-symbols-outlined ' + (className ?? '')}>
    {iconName}
  </span>
)

export default Icon
