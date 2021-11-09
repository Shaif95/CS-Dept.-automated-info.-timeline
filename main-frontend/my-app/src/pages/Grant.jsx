import React from 'react'

const Grant = () => {
  return (
    <>
      <div className='container padding-top'>
        <div className='col text-center'>
          <div className='mx-auto' style={{ marginTop: '15px !important' }}>
            <label>
              <h1>
                {' '}
                Grant <span> Information Form </span>
              </h1>{' '}
            </label>
          </div>
        </div>
      </div>

      <form>
        <div className='form-group'>
          <div className='container padding-0'>
            <div className='row'>
              <div className='col-sm'>
                <div className='mx-auto' style={{ marginTop: '5px !important' }}>
                  <label>
                    <h4>
                      {' '}
                      Grant <span> Title </span>
                    </h4>{' '}
                  </label>
                  <input
                    type='grant-title'
                    className='form-control'
                    id='grant-title'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='container padding-0'>
            <div className='row'>
              <div className='col-sm'>
                <label>
                  {' '}
                  Grant <span> PI </span>{' '}
                </label>
                <input
                  type='grant-title'
                  className='form-control'
                  id='grant-title'
                />
              </div>
              <div className='col-sm'>
                <label>
                  {' '}
                  Grant <span> CO-PI </span>{' '}
                </label>
                <input
                  type='grant-title'
                  className='form-control'
                  id='grant-title'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container padding-0'>
          <div className='row'>
            <div className='col-sm'>
              <label>
                {' '}
                Grant <span> Type </span>{' '}
              </label>
              <div className='dropdown show'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Click to Select Grant Type
                </button>

                <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                  <a className='dropdown-item' href='#'>
                    NSF
                  </a>
                  <a className='dropdown-item' href='#'>
                    NIH
                  </a>
                  <a className='dropdown-item' href='#'>
                    PVT
                  </a>
                </div>
              </div>
            </div>

            <div className='col-sm '>
              <div className='container'>
                <div className='mx-auto' style={{ marginTop: '25px !important' }}>
                  <label className='btn btn-primary' for='my-file-selector'>
                    <input id='my-file-selector' type='file' className='d-none' />
                    Upload Related Image Here
                  </label>
                </div>
              </div>
            </div>

            <div className='col-sm'>
              <label>
                {' '}
                Research <span> Area</span>{' '}
              </label>
              <div className='dropdown show'>
                <button
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Click to Select Research Area
                </button>

                <div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                  <a className='dropdown-item' href='#'>
                    Machine learning
                  </a>
                  <a className='dropdown-item' href='#'>
                    Software Engineering
                  </a>
                  <a className='dropdown-item' href='#'>
                    Other
                  </a>
                </div>
              </div>
            </div>

            <div className='col-sm'>
              <label>
                {' '}
                Grant <span> Amount </span>{' '}
              </label>
              <input type='grant-title' className='form-control' id='grant-title' />
            </div>
          </div>
        </div>

        <div className='container padding-0'>
          <div>
            <div className='row'>
              <div className='col-sm'>
                <div className='mx-auto' style={{ marginTop: '25px !important' }}>
                  <label>
                    {' '}
                    Grant <span> Abstract </span>{' '}
                  </label>

                  <textarea
                    style={{ marginTop: '10%; !important' }}
                    name='editor1'
                  ></textarea>
                  <script>CKEDITOR.replace( 'editor1' );</script>
                </div>
              </div>
            </div>
          </div>

          <div className='container padding-0'>
            <div className='mx-auto' style={{ marginTop: '25px !important' }}>
              <div className='row'>
                <div className='col-sm'>
                  <label>
                    {' '}
                    Start <span> Date </span>{' '}
                  </label>
                  <input
                    type='grant-title'
                    className='form-control'
                    id='grant-title'
                  />
                </div>

                <div className='col-sm'>
                  <label>
                    {' '}
                    End <span> Date </span>{' '}
                  </label>
                  <input
                    type='grant-title'
                    className='form-control'
                    id='grant-title'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='mx-auto' style={{ marginTop: '25px !important' }}>
            <div className='col text-center'>
              <button className='btn btn-default'>Submit grant Form</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Grant
