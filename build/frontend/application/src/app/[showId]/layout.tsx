import { ReactElement, ReactNode } from 'react'
import Header from '../../components/server/Header'
import NavigationLink from '../../components/client/NavigationLink'
import NavigationToggler from '../../components/client/NavigationToggler'
import ApolloClientProvider from '../../components/client/ApolloClientProvider'
import { NowSettingsProvider } from '../../components/client/context/NowSettingsContext'
import createConfig from '../../config/createConfig'

export default async function ShowLayout ({ children }: {
  children: ReactNode
}): Promise<ReactElement> {
  const feGraphqlUrl = createConfig().get('client.graphql.feUrl')
  return <>
    <ApolloClientProvider graphqlUrl={feGraphqlUrl}>
      <NowSettingsProvider>
        <Header>
          <NavigationToggler>
            <NavigationLink href={'/%showId%'} iconName={'info'} label={'O koncertu'}/>
            <NavigationLink href={'/%showId%/performers'} iconName={'group'} label="Účinkující"/>
            <NavigationLink href={'/%showId%/program'} iconName={'event_note'} label="Program"/>
            <NavigationLink href={'/%showId%/now'} iconName={'play_arrow'} label="Právě hrajem"/>
          </NavigationToggler>
        </Header>
        <main className={'container'}>{children}</main>
      </NowSettingsProvider>
    </ApolloClientProvider>
  </>
}
