import Logo from "../../images/logo.png.webp"

const WebFooter = () => {
    return (
        <div className="footer-bg text-white-50 p-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <h3 className='fw-bold text-white'>COMPANY</h3>
                            <p>About Us</p>
                            <p>Company</p>
                            <p>Press & Blog</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h3 className='fw-bold text-white'>OPEN HOUR</h3>
                            <p>Monday 11am-7pm</p>
                            <p>Tuesday-Friday 11am-8pm</p>
                            <p>Saturday 10am-6pm</p>
                            <p>Sunday 11am-6pm</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <h3 className='fw-bold text-white'>RESOURCES</h3>
                            <p>Home Insurance</p>
                            <p>Travel Insurance</p>
                            <p>Car Insurance</p>
                            <p>Business Insurance</p>
                            <p>Heal Insurance</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img src={Logo} alt="Logo" />
                            <p className='py-4'>GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>

                        </div>
                    </div>
                </div>

                <div className='border w-100 m-auto my-5 border-dark'></div>

                <div className='text-center'>
                    <p>Copyright ©2023 All rights reserved | This template is made with by Colorlib</p>
                </div>
            </div>
        </div>
    )
}

export default WebFooter