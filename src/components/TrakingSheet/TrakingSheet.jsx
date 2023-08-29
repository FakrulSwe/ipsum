import React from 'react';
import './TrakingSheet.css';
import trackSheet from '../../images/trackingSheet.jpg'

const TrakingSheet = () => {
    return (
        <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center 
                     align-items-center">
                        <div className='p-5 m-5'>
                            <h1 className="fs-1 text">Nemo enim ipsam quia </h1>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu nemo enim</p>

                            <div className='ml-2'>
                                <div className="input-group shadow p-1 mb-1 bg-body-success">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Radio button for following text input"/>
                                </div>
                                <p className='form-control mb-0'>Sed ut perspiciatis unde</p>
                                </div>
                                <div className="input-group shadow p-1 mb-1 bg-body-success">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Radio button for following text input"/>
                                </div>
                                <p className='form-control mb-0'>Omnis iste natus</p>
                                </div>
                                <div className="input-group shadow p-1 mb-1 bg-body-success">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Radio button for following text input"/>
                                </div>
                                <p className='form-control mb-0'>Error sit voluptatem</p>
                                </div>
                                <div className="input-group shadow p-1 mb-1 bg-body-success">
                                <div className="input-group-text">
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Radio button for following text input"/>
                                </div>
                                <p className='form-control mb-0'>Accusantium doloremque</p>
                                </div>
                            <button className="btn btn-outline-success bg-success-subtle text-black px-5 py-2 mt-3" type="submit">Try Out Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mt-4 pt-4 justify-content-center">
                        <img src={trackSheet} className="d-block w-100 pt-4" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className='dummy'>
            <h1>Lorem Ipsum is simply dummy text of <br/> the printing and typesetting</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore </p>
        </div>
        </div>
    );
};

export default TrakingSheet;