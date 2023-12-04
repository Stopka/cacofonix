import { ReactElement } from 'react'

export default async function Loading (): Promise<ReactElement> {
  return <>
    <h1 className="placeholder-glow">
      <span className="placeholder col-6"></span>
    </h1>
    <article className={'clearfix mb-5'}>
      <h2><span className="placeholder col-6"></span></h2>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1288.000000 728.000000" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>'}
               className="img-fluid rounded"
               alt={''}/>
        </div>
        <div className="col-md-8">
          <div className="card-body mt-3 mt-md-0 ms-md-3">
            <p className="placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
          </div>
        </div>
      </div>

    </article>
    <article className={'clearfix mb-5'}>
      <h2><span className="placeholder col-6"></span></h2>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1288.000000 728.000000" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>'}
               className="img-fluid rounded"
               alt={''}/>
        </div>
        <div className="col-md-8">
          <div className="card-body mt-3 mt-md-0 ms-md-3">
            <p className="placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
          </div>
        </div>
      </div>

    </article>
  </>
}
