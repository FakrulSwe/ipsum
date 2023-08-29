import React from 'react';
import './Card.css';
import card1 from '../../images/cardlogo3.svg';
import card2 from '../../images/cardlogo2.svg';
import card3 from '../../images/cardlogo3.svg';

const Card = () => {
    return (
        <div className='Cards'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 p-3 rounded-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img src={card1} className="card-img-top ps-2 py-4" alt="..."/>
                    <div className="card-body font">
                        <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                        <p className="card-text">Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 p-3 rounded-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img src={card2} className="card-img-top ps-2 py-4" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sed do eiusmod tempor incididunt ut labore </h5>
                        <p className="card-text">Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel</p>
                    </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100 p-3 rounded-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                    <img src={card3} className="card-img-top ps-2 py-4" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Quis autem vel eum iure reprehenderit qui in ea voluptate</h5>
                        <p className="card-text">Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Card;