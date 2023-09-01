import React from 'react'
import WebFooter from '../../components/footer/footer'

const Schedule = () => {
  return (<>
    <div className="bg-black p-5">
      <h1 className='text-white p-5 text-center'>SCHEDULE</h1>
    </div>
    <div className="time py-5">
      <div className="container">
        <div className="text-center col-md-5 m-auto ">
          <h5 className='topHeading'><span className='beforeLine pe-5'>_____</span>OUR TIME SCHEDULE</h5>
          <h2 className=' py-2 fw-bold '>SELECT THE PERFECT TIME YOU NEED NOW </h2>
        </div>

        <div className="days m-auto p-4 row">
          <div className="col-md-2">
            <h4 className='p-4'>Saturday</h4>
          </div>
          <div className="col-md-2">
            <h4 className='p-4'>Sunday</h4>
          </div>
          <div className="col-md-2">
            <h4 style={{ backgroundColor: "#ff1313" }} className='p-4 text-white'>Monday</h4>
          </div>
          <div className="col-md-2">
            <h4 className='p-4'>Tuesday</h4>
          </div>
          <div className="col-md-2">
            <h4 className='p-4'>Wednesday</h4>
          </div>
          <div className="col-md-2">
            <h4 className='p-4'>Thursday</h4>
          </div>
          {/* <div className="col-md-1">
              <h4 className='p-4'>Friday</h4>
            </div> */}
        </div>

        <div className="row my-3 m-auto">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div className='text-center days p-4'>
              <span className='bg-black p-1 text-white'>6am-8am</span>
              <h4 className='py-4 fw-bold'>Kick Boxing</h4>
              <p>by <span className='text-black-50'>Jhos Kusam</span></p>
            </div>
          </div>
          <div className="col-md-2">
            <div className='text-center days p-4'>
              <span className='bg-black p-1 text-white'>6am-8am</span>
              <h4 className='py-4 fw-bold'>Kick Boxing</h4>
              <p>by <span className='text-black-50'>Jhos Kusam</span></p>
            </div>
          </div>
          <div className="col-md-2">
            <div className='text-center days p-4'>
              <span className='bg-black p-1 text-white'>6am-8am</span>
              <h4 className='py-4 fw-bold'>Kick Boxing</h4>
              <p>by <span className='text-black-50'>Jhos Kusam</span></p>
            </div>
          </div>
          <div className="col-md-2">
            <div className='text-center days p-4'>
              <span className='bg-black p-1 text-white'>6am-8am</span>
              <h4 className='py-4 fw-bold'>Kick Boxing</h4>
              <p>by <span className='text-black-50'>Jhos Kusam</span></p>
            </div>
          </div>
          <div className="col-md-2">
            <div className='text-center days p-4'>
              <span className='bg-black p-1 text-white'>6am-8am</span>
              <h4 className='py-4 fw-bold'>Kick Boxing</h4>
              <p>by <span className='text-black-50'>Jhos Kusam</span></p>
            </div>
          </div>
          <div className="col-md-1"></div>

        </div>

      </div>
    </div>

    <WebFooter />
  </>
  )
}

export default Schedule