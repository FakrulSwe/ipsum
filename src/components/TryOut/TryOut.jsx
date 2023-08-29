import React from 'react';
import './TryOut.css';
import drive from '../../images/image 39.png';
import snap from '../../images/image 68.png';
import tiktok from '../../images/image 65.png';
import facebook from '../../images/Vector.svg';
import image69 from '../../images/image 69.png';
import image66 from '../../images/image 66.png';
import image54 from '../../images/image 54.png';
import image70 from '../../images/image 70.png';
import image67 from '../../images/image 67.png';

const TryOut = () => {
    return (
        <div>
            <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center 
                     align-items-center">
                        <div className='p-5 m-5'>
                            <h1 className="fs-4 text">Sed ut perspiciatis unde omnis <br/> iste natus error. <span className='fw-bold'>Try out! </span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ullamco esse cillium</p>
                            <div className='ml-2'>
                            <button className="btn btn-outline-success bg-success text-light" type="submit">Try Out Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-md-5">
                    <div className="row m-4">
                        <div className="col-md-2 logo">
                            <img src={drive} alt="" />
                        </div>
                        <div className="ms-md-1 ms-md-auto logo">
                            <img src={snap} alt="" />
                            <p>Coming soon</p>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-md-1 ms-md-auto logo">
                            <img src={tiktok} alt="" />
                        </div>
                        <div className="col-md-1 ms-md-auto">       
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-auto me-auto logo">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="col-md-4 ms-md-auto logo">
                            <img src={image69} alt="" />
                            <p>Coming soon</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 ms-md-auto logo">
                            <img src={image66} alt="" />
                            <p>Coming soon</p>
                        </div>
                        <div className="col-md-1 ms-md-auto">
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-auto me-auto logo">
                            <img src={image54} alt="" />
                        </div>
                        <div className="col-md-4 ms-md-auto logo">
                            <img src={image70} alt="" />
                            <p>Coming soon</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 ms-md-auto logo">
                            <img src={image67} alt="" />
                            <p >Coming soon</p>
                        </div>
                        <div className="col-md-1 ms-md-auto">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default TryOut;