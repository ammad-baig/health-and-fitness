import CustomButton from '../../components/Button'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import WebFooter from '../../components/footer/footer';


const Services = () => {
  return (<>
    <div className="bg-black p-5">
      <h1 className='text-white p-5 text-center'>SERVICES</h1>
    </div>

    <div className='service'>
      <div className="container p-md-5 py-5 ">
        <div className="row p-md-5 py-5">
          <div className="col-md-8">
            <h4 className='topHeading'><span className='beforeLine pe-5'>_____</span>OUR SERVICES FOR YOU</h4>
            <h2 className='py-2 fw-bold '>PUSH YOUR LIMITS FORWARD </h2>
            <h2 className='py-2 fw-bold '>WE OFFER TO YOU</h2>
          </div>
          <div className="col-md-4 d-md-flex justify-content-end align-items-end">
            <CustomButton btnClasses={"btn btn-outline-success py-3 "} btnText={"MORE SERVICES"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div style={{ backgroundColor: "#f7fdff" }} className='text-center py-5 my-3'>
              <FitnessCenterRoundedIcon className='fs-1 m-4' />
              <h5 className='fw-bold p-4'>QUALITY EQUIPMENT</h5>
              <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ backgroundColor: "#f7fdff" }} className='text-center py-5 my-3'>
              <FitnessCenterRoundedIcon className='fs-1 m-4' />
              <h5 className='fw-bold p-4'>HEALTH CARING</h5>
              <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ backgroundColor: "#f7fdff" }} className='text-center py-5 my-3'>
              <FitnessCenterRoundedIcon className='fs-1 m-4' />
              <h5 className='fw-bold p-4'>GYM STRATEGIES</h5>
              <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ backgroundColor: "#f7fdff" }} className='text-center py-5 my-3'>
              <FitnessCenterRoundedIcon className='fs-1 m-4' />
              <h5 className='fw-bold p-4'>GYM STRATEGIES</h5>
              <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ backgroundColor: "#f7fdff" }} className='text-center py-5 my-3'>
              <FitnessCenterRoundedIcon className='fs-1 m-4' />
              <h5 className='fw-bold p-4'>GYM STRATEGIES</h5>
              <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ backgroundColor: "#f7fdff" }} className='text-center py-5 my-3'>
              <FitnessCenterRoundedIcon className='fs-1 m-4' />
              <h5 className='fw-bold p-4'>GYM STRATEGIES</h5>
              <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <WebFooter />

  </>

  )
}

export default Services