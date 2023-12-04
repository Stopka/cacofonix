import { ReactElement } from 'react'

export default async function Loading (): Promise<ReactElement> {
  return <>
        <h1 className="placeholder-glow">
            <span className="placeholder col-6"></span>
        </h1>
        <ol className="list-group">
            <li className="list-group-item placeholder-glow">
                <span className="placeholder col-7"></span>
            </li>
            <li className="list-group-item placeholder-glow">
                <span className="placeholder col-3"></span>
            </li>
            <li className="list-group-item placeholder-glow">
                <span className="placeholder col-6"></span>
            </li>
            <li className="list-group-item placeholder-glow">
                <span className="placeholder col-7"></span>
            </li>
            <li className="list-group-item placeholder-glow">
                <span className="placeholder col-6"></span>
            </li>
        </ol>
    </>
}
