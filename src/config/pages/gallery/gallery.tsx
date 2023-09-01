import WebFooter from '../../components/footer/footer'
import GalleryPic1 from '../../images/gallery1.png.webp'
import GalleryPic2 from '../../images/gallery2.png.webp'
import GalleryPic3 from '../../images/gallery3.png.webp'
import GalleryPic4 from '../../images/gallery4.png.webp'
import GalleryPic5 from '../../images/gallery5.png.webp'

const Gallery = () => {
  return (
    <>
      <div className="bg-black p-5">
        <h1 className='text-white p-5 text-center'>OUR GALLERY</h1>
      </div>

      <div className='gallery py-5 container-fluid'>
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

      <WebFooter />
    </>
  )
}

export default Gallery