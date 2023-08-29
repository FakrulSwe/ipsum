import React from 'react';
import './Banner.css';
import banner from '../../images/Rectangle1.png'

const Banner = () => {
    return (
            <>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center 
                     align-items-center">
                        <div className='p-5 m-5'>
                            <h1 className="fs-1 text">Lore <span className='fw-bold'>ipsum.</span><br/> Dolor <span className='fw-bold'>sit.</span></h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.</p>
                            <div className='ml-2'>
                                <button className="btn btn-outline-dark p-2" type="submit">Viverra orci sagittis</button>
                            <button className="btn btn-outline-success bg-success text-light px-5 py-2 m-3" type="submit">Get a demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={banner} className="d-block w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className='bannerText'>
            <h1>Ut enim ad minima veniam, quis nostrum <br/>exercitationem ullam corporis suscipit</h1>
        </div>
    </>
    );
};

export default Banner;