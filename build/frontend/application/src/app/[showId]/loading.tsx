import { ReactElement } from 'react'

export default async function Loading (): Promise<ReactElement> {
  return <>
    <h1 className="placeholder-glow">
      <span className="placeholder col-6"></span>
    </h1>
    <p className="placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
  </>
}
