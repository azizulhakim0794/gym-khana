import React from 'react';
import './HomeMidOne.css'
import wells from '../../../Image-&-Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg'

const HomeMidOne = () => {
    return (
        <div className="container top-margin mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="midImg" src={wells} alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <p className="h2 text-warning">
                            WE ARE HERE TO DREAM
                    </p>
                        <p className="h2">
                            OUR TEEM IS HERE TO SURVIVE YOU
                    </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore, aliquid quos sapiente velit quas atque quia hic saepe error quaerat, corrupti minus natus sunt delectus incidunt similique perferendis suscipit.
                    </p>
                    </div>
                </div>
            </div>
            <br />
            <div className="alert-danger p-1" role="alert">
              <p className="text-center mt-3"><b> Notice: Tattoo is Haram in Islam.</b></p>
            </div>
        </div>
    );
};

export default HomeMidOne;