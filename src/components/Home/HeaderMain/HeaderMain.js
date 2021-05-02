import React from 'react';
import './HeaderMain.css'
import Typical from 'react-typical'

const HeaderMain = () => {
    return (
        <main style={{ height: '500px' }} className="d-flex align-items-center justify-content-center" id="home">

            <div className="">
                <h4 className="text-1">Hello, I'm</h4>
                <h2 className="text-2 text-white">Rashedul Karim</h2>
                <h4 className="text-3 mb-4">
                    <Typical
                        steps={[" & I'm Web Developer", 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h4>
                <a href="https://drive.google.com/uc?export=download&id=1k6D1w8_ItzsL1-wYbGBbjqFiWAUXmuo_" target="_blank" className="btn btn-danger">Download resume</a>
            </div>
        </main>
    );
};

export default HeaderMain;