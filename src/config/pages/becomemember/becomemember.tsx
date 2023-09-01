import CustomButton from "../../components/Button";
import WebFooter from "../../components/footer/footer";
import ContactPic from "../../images/contact-form.png"
import { TextField } from '@mui/material';

const BecomeMember = () => {
  return (
    <>
      <div className="bg-black p-5">
        <h1 className='text-white p-5 text-center'>NEW MEMBERS</h1>
      </div>

      <div className="contact py-5 container">
        <div className="row">
          <div className="col-md-6">
            <img src={ContactPic} className='w-100' alt="" />
          </div>
          <div className="col-md-5">
            <div style={{ backgroundColor: "#f7fdff" }} className=''>
              <h4 className='topHeading py-md-3'><span className='beforeLine px-5'>_____</span>CONTACT FORM</h4>
              <h1 className='fw-bold p-md-3'>FEEL FREE TO CONTACT WITH US!</h1>

              <div className="row">

                <div className='col-md-5 p-4'>
                  <TextField id="standard-basic" label="Name" variant="standard" />
                </div>
                <div className='col-md-5 p-4'>
                  <TextField id="standard-basic" label="Phone" variant="standard" />
                </div>
                <div className='col-md-5 p-4'>
                  <TextField id="standard-basic" label="Boxing" variant="standard" />
                </div>
                <div className='col-md-5 p-4'>
                  <TextField id="standard-basic" label="Email" variant="standard" />
                </div>
                <div className='col-md-12 p-4'>
                  <TextField id="standard-basic" label="Message" variant="standard" />
                </div>
              </div>
              <CustomButton btnClasses={"btn btn-outline-success py-3 "} btnText={"MORE SERVICES"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />

            </div>
          </div>

        </div>
      </div>

      <WebFooter />
    </>
  )
}

export default BecomeMember