import React from 'react';
import './Massa.css';

const Massa = () => {
    return (
        <div className='massa'>
             <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                    <div className="col-10 col-md-6 d-flex justify-content-center align-items-center">
                        <div className='p-5 m-5'>
                            <h1 className="fs-1 text">Ullamcorper morbi tincidunt <br/> ornare massa eget</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore </p>
                        </div>
                    </div>

                    <div className="col-10 col-md-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-success bg-success text-light px-5 py-2 m-3" type="submit">Get a demo</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Massa;