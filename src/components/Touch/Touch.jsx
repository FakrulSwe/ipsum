import React from 'react';
import './Touch.css';

const Touch = () => {
    return (
        <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className='p-5 m-5'>
                            <h1 className="fs-1 text">Consectetur adipiscing elit</h1>
                        <p>Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim viverra</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center gap-4">
                        <div>
                            <div className='FTouch'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="103" height="146" viewBox="0 0 103 146" fill="none">
                                <line x1="5.41605" y1="5.38965" x2="5.41604" y2="140.735" stroke="#58BF73" stroke-width="9" stroke-linecap="round"/>
                                <line x1="36.3713" y1="27.6484" x2="36.3713" y2="140.735" stroke="#58BF73" stroke-width="9" stroke-linecap="round"/>
                                <line x1="67.3263" y1="48.5586" x2="67.3263" y2="140.735" stroke="#58BF73" stroke-width="9" stroke-linecap="round"/>
                                <line x1="98.2816" y1="66.77" x2="98.2816" y2="140.735" stroke="#58BF73" stroke-width="9" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <p className='pText text-success'>First Touch</p>
                        </div>
                        <div>
                            <div className='FTouch'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="145" viewBox="0 0 103 145" fill="none">
                            <line x1="4.5" y1="-4.5" x2="139.845" y2="-4.5" transform="matrix(5.06067e-08 1 1 -3.77556e-08 102.789 0.174805)" stroke="#FFC646" stroke-width="9" stroke-linecap="round"/>
                            <line x1="4.5" y1="-4.5" x2="117.586" y2="-4.5" transform="matrix(-4.77629e-08 1 1 4.00036e-08 71.834 22.4336)" stroke="#FFC646" stroke-width="9" stroke-linecap="round"/>
                            <line x1="4.5" y1="-4.5" x2="96.6764" y2="-4.5" transform="matrix(-4.77629e-08 1 1 4.00036e-08 40.8788 43.3438)" stroke="#FFC646" stroke-width="9" stroke-linecap="round"/>
                            <line x1="4.5" y1="-4.5" x2="78.4647" y2="-4.5" transform="matrix(-4.77629e-08 1 1 4.00036e-08 9.92355 61.5557)" stroke="#FFC646" stroke-width="9" stroke-linecap="round"/>
                            </svg>
                            </div>
                            <p className='pText text-warning'>Last Touch</p>
                        </div>
                        <div className='pb-4'>
                        <p className='custom pt-4'><span className='fs-2 text fw-bold'>3 <br/></span><span className='fs-5 text'>+Custom ones</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='dummy'>
            <h1>Ullamcorper morbi tincidunt ornare massa eget. <br/> Quam viverra orci sagittis eu volutpat odio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore </p>
        </div>
        </div>
    );
};

export default Touch;