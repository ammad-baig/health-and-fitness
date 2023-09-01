import WebFooter from "../../components/footer/footer"
import Blog1 from "../../images/blog1.png.webp"
import Blog2 from "../../images/blog2.png.webp"

const Blog = () => {
  return (
    <>
      <div className="bg-black p-5">
        <h1 className='text-white p-5 text-center'>BLOG</h1>
      </div>

      <div className='blog py-3 container'>
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

export default Blog