import React from 'react'
const Event = () => {
  return (
    <>
      <div className='container padding-top'>
        <div className='col text-center'>
          <div className='mx-auto' style={{ marginTop: '15px !important' }}>
            <label>
              <h1>
                {' '}
                Baylor <span> Events </span>
              </h1>{' '}
            </label>
          </div>
        </div>
      </div>
      <div
        className='row padding-1 justify-content-center'
        style={{ marginTop: '25px !important' }}
      >
        <div className='container' style={{ marginTop: '15px !important' }}>
          <div className='card-deck' style={{ paddingRight: '100px' }}>
            <div className='card' style={{ width: '500px' }}>
              <img
                className='card-img-top'
                src='../res/ny.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  Title : Rapid Analysis of Dreissenid Veliger Prevalence.
                </h5>
                <p className='card-text'>Faculty : Greg Hamerly Ryan McManamay.</p>

                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
            <div className='card' style={{width: '500px'}}>
              <img
                className='card-img-top'
                src='../res/la.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title : List of Faculty.</h5>
                <p className='card-text'>
                  Faculty : Baylor University Computer Science.
                </p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
            <div className='card' style={{width: '500px'}}>
              <img
                className='card-img-top'
                src='../res/chicago.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title : Map.</h5>
                <p className='card-text'> Candace Ditch.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='row padding-1 justify-content-center'
        style={{marginTop: '5px !important'}}
      >
        <div className='container' style={{marginTop: '5px !important'}}>
          <div className='card-deck' style={{paddingRight: '100px'}}>
            <div className='card' style={{width: '500px'}}>
              <div className='card-body'>
                <h5 className='card-title'>
                  Title : Rapid Analysis of Dreissenid Veliger Prevalence.
                </h5>
                <p className='card-text'>Faculty : Greg Hamerly Ryan McManamay.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
            <div className='card' style={{width: '500px'}}>
              <div className='card-body'>
                <h5 className='card-title'>
                  Title : Rapid Analysis of Dreissenid Veliger Prevalence.
                </h5>
                <p className='card-text'>Faculty : Greg Hamerly Ryan McManamay.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
            <div className='card' style={{width: '500px'}}>
              <div className='card-body'>
                <h5 className='card-title'>Title : Map.</h5>
                <p className='card-text'> Candace Ditch.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='row padding-1 justify-content-center'
        style={{marginTop: '5px !important'}}
      >
        <div className='container' style={{marginTop: '5px !important'}}>
          <div className='card-deck' style={{paddingRight: '100px'}}>
            <div className='card' style={{width: '500px'}}>
              <img
                className='card-img-top'
                src='../res/ny.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  Title : Rapid Analysis of Dreissenid Veliger Prevalence.
                </h5>
                <p className='card-text'>Faculty : Greg Hamerly Ryan McManamay.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
            <div className='card' style={{width: '500px'}}>
              <img
                className='card-img-top'
                src='../res/la.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title : List of Faculty.</h5>
                <p className='card-text'> Baylor Computer Science.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
            <div className='card' style={{width: '500px'}}>
              <img
                className='card-img-top'
                src='../res/chicago.jpg'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Title : Map.</h5>
                <p className='card-text'> Candace Ditch.</p>
                <p className='card-text'>
                  <small className='text-muted'>
                    <button className='btn btn-default'>More Details</button>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='mx-auto' style={{marginTop: '5px !important'}}>
          <div className='col text-center'>
            <button className='btn btn-default'>Click to See more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
