import './home.css'
import CustomButton from '../../components/Button'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AboutPic from '../../images/about.png.webp'
import ClientPic from '../../images/client.png'
import GalleryPic1 from '../../images/gallery1.png.webp'
import GalleryPic2 from '../../images/gallery2.png.webp'
import GalleryPic3 from '../../images/gallery3.png.webp'
import GalleryPic4 from '../../images/gallery4.png.webp'
import GalleryPic5 from '../../images/gallery5.png.webp'
import Team1 from "../../images/team1.png.webp"
import Team2 from "../../images/team2.png.webp"
import Team3 from "../../images/team3.png.webp"
import ContactPic from "../../images/contact-form.png"
import { TextField } from '@mui/material';
import Blog1 from "../../images/blog1.png.webp"
import Blog2 from "../../images/blog2.png.webp"
import WebFooter from '../../components/footer/footer';


const Home = () => {
  return (
    <>
      <div className='banner-1 p-5'>
        <div className="container  bannerText">
          <div className="row">
            <div className="col-md-7">
              <h4 className='topHeading'><span className='beforeLine px-5'>_____</span>WITH PATRICK POTTER</h4>

              <h1 className='display-3 text-white p-3'>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE.</h1>

              <CustomButton btnClasses={"btn btn-outline-success p-3 ms-4"} btnText={"BECOME A MEMBER"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
            </div>
            <div className="col-md-5 d-flex justify-content-end align-items-end ">
              <div>
                <PlayCircleFilledRoundedIcon className='playIcon my-3 ' />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='about-area container my-5 p-md-5'>
        <div className="row">
          <div className="col-md-6">
            <div>
              <img src={AboutPic} width={"100%"} />
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
            <div>
              <h4 className='topHeading py-3'><span className='beforeLine pe-3'>_____</span>ABOUT OUR GYM</h4>

              <h2 className='fw-bold py-3'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h2>

              <p className='fw-bold py-3'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>

              <p className='text-black-50 py-3'>Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>

              <CustomButton btnClasses={"btn btn-outline-success py-3 "} btnText={"BECOME A MEMBER"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
            </div>
          </div>
        </div>

      </div>

      <div className='serviceBg'>
        <div className="container p-md-5 py-5 ">
          <div className="row p-md-5 py-5">
            <div className="col-md-8">
              <h4 className='topHeading'><span className='beforeLine pe-5'>_____</span>OUR SERVICES FOR YOU</h4>
              <h2 className='text-white py-2 fw-bold '>PUSH YOUR LIMITS FORWARD </h2>
              <h2 className='text-white py-2 fw-bold '>WE OFFER TO YOU</h2>
            </div>
            <div className="col-md-4 d-md-flex justify-content-end align-items-end">
              <CustomButton btnClasses={"btn btn-outline-success py-3 "} btnText={"MORE SERVICES"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className='bg-white text-center py-5 my-3'>
                <FitnessCenterRoundedIcon className='fs-1 m-4' />
                <h5 className='fw-bold p-4'>QUALITY EQUIPMENT</h5>
                <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='bg-white text-center py-5 my-3'>
                <FitnessCenterRoundedIcon className='fs-1 m-4' />
                <h5 className='fw-bold p-4'>HEALTH CARING</h5>
                <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='bg-white text-center py-5 my-3'>
                <FitnessCenterRoundedIcon className='fs-1 m-4' />
                <h5 className='fw-bold p-4'>GYM STRATEGIES</h5>
                <p className='px-5 pb-5'>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='feedback p-md-5 py-5'>
        <div className="container p-md-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={ClientPic} width={"100%"} alt="Client Picture" />
            </div>
            <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
              <div>
                <h4 className='topHeading py-3'><span className='beforeLine pe-3'>_____</span>CLIENT FEEDBACK</h4>

                <h1 className='fw-bold py-3'>WHAT OUR CLIENT THINK ABOUT OUR GYM</h1>



                <p className='text-black-50 py-3'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replicaition of thei designers ijtls intended csents your se.</p>

                <h3 className='d-inline fw-bold'>JHON SMITH  </h3>
                <span className="text-black-50">GYM TRAINER</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='gallery container-fluid'>
        <div className="row">
          <div className="col-md-6">
            <img src={GalleryPic1} width={"100%"} alt="Gallery Picture 1" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <img src={GalleryPic2} width={"100%"} alt="Gallery Picture 2" />
              </div>
              <div className="col-md-6">
                <img src={GalleryPic3} width={"100%"} alt="Gallery Picture 3" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-4">
                <img src={GalleryPic4} width={"100%"} alt="Gallery Picture 4" />
              </div>
              <div className="col-md-6 my-4">
                <img src={GalleryPic5} width={"100%"} alt="Gallery Picture 5" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="members">
        <div className="container">
          <div className="row p-md-5 py-5">
            <div className="col-md-5">
              <h4 className='topHeading'><span className='beforeLine pe-5'>_____</span>OUR TEAM MEMBER</h4>
              <h2 className=' py-2 fw-bold '>OUR MOST EXPIRENCED TRAINERS </h2>
            </div>
            <div className="col-md-7 px-5 d-md-flex justify-content-end align-items-end">
              <CustomButton btnClasses={"btn btn-outline-success py-3 "} btnText={"MORE SERVICES"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-4 position-relative">
              <img src={Team1} className='w-100 my-2' alt="Team 1" />
              <div className='position-absolute cardText'>
                <h6 className='text-white-50 '><span className='beforeLine pe-3'>_____</span>Creative derector</h6>
                <h3 className='text-white'>Jhon Sunsaev</h3>
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <img src={Team2} className='w-100 my-2' alt="Team 1" />
              <div className='position-absolute cardText'>
                <h6 className='text-white-50 '><span className='beforeLine pe-3'>_____</span>Creative derector</h6>
                <h3 className='text-white'>Jhon Sunsaev</h3>
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <img src={Team3} className='w-100 my-2' alt="Team 1" />
              <div className='position-absolute cardText'>
                <h6 className='text-white-50 '><span className='beforeLine pe-3'>_____</span>Creative derector</h6>
                <h3 className='text-white'>Jhon Sunsaev</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-2">
        <div className="container py-5">
          <div className="row p-md-5 py-5">
            <div className="col-md-5">
              <h2 className='text-white py-2 fw-bold '>APRIL MEMBERSHIP OFFER AVAILABLE NOW</h2>
            </div>
            <div className="col-md-7 d-md-flex justify-content-end align-items-center">
              <CustomButton btnClasses={"btn btn-outline-success py-3 "} btnText={"MORE SERVICES"} btnType={"submit"} btnVariant={"contained"} btnColor={"error"} btnSx={{ backgroundColor: "#ff1313" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="time">
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

      <div className="contact container">
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

      <div className='text-center my-5'>
        <h4 className='topHeading '><span className='beforeLine px-5'>_____</span>RECENT NEWS FORM BLOG</h4>
        <h1 className='fw-bold col-md-5 m-auto p-md-3'>GYM TIPS NEWS FOR YOU THAT SELECTED BY US!</h1>
      </div>

      <div className='blog container'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className='p-md-3 me-2'>
              <img src={Blog1} className='w-100' alt="Blog 1" />
              <div className='p-md-3'>
                <h5 ><span className='beforeLine pe-3'>_____</span>Creative Director</h5>
                <h3 className='fw-bold'>Footprints in Time is perfect House in Kurashiki</h3>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className='p-md-3 ms-2'>
              <img src={Blog2} className='w-100' alt="Blog 2" />
              <div className='p-md-3 '>
                <h5 ><span className='beforeLine pe-3'>_____</span>Creative Director</h5>
                <h3 className='fw-bold'>Footprints in Time is perfect House in Kurashiki</h3>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

      </div>

      <WebFooter />
    </>
  )
}

export default Home