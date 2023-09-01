import CustomButton from '../../components/Button'
import AboutPic from '../../images/about.png.webp'
import GalleryPic1 from '../../images/gallery1.png.webp'
import GalleryPic2 from '../../images/gallery2.png.webp'
import GalleryPic3 from '../../images/gallery3.png.webp'
import GalleryPic4 from '../../images/gallery4.png.webp'
import GalleryPic5 from '../../images/gallery5.png.webp'
import ClientPic from '../../images/client.png'
import Team1 from "../../images/team1.png.webp"
import Team2 from "../../images/team2.png.webp"
import Team3 from "../../images/team3.png.webp"
import WebFooter from '../../components/footer/footer'


const About = () => {
  return (
    <>
      <div className="bg-black p-5">
        <h1 className='text-white p-5 text-center'>ABOUT US</h1>
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
              <img src={Team1} className='w-100 py-2' alt="Team 1" />
              <div className='position-absolute cardText'>
                <h6 className='text-white-50 '><span className='beforeLine pe-3'>_____</span>Creative derector</h6>
                <h3 className='text-white'>Jhon Sunsaev</h3>
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <img src={Team2} className='w-100 py-2' alt="Team 1" />
              <div className='position-absolute cardText'>
                <h6 className='text-white-50 '><span className='beforeLine pe-3'>_____</span>Creative derector</h6>
                <h3 className='text-white'>Jhon Sunsaev</h3>
              </div>
            </div>
            <div className="col-md-4 position-relative">
              <img src={Team3} className='w-100 py-2' alt="Team 1" />
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

      <WebFooter />

    </>
  )
}

export default About