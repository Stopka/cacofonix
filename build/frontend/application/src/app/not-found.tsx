import { ReactElement } from 'react'
import Header from '../components/server/Header'

export default async function NotFound (): Promise<ReactElement> {
  return <>
    <Header/>
    <div className={'container'}>
      <h1>Stránka nenalezena</h1>
      <p>Takovou stránku v naší aplikaci nemáme.</p>
      <em>HTTP 404</em>
    </div>
  </>
}
