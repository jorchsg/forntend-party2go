import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './style.scss';

const DefaultLayout = (props) => {
    return (
        <div className="default-layout">
            {/* <Navbar/> */}
            <div className='content'>
                {props.children}
            </div>
            {/* <Footer/> */}
        </div>
    )
}
export default DefaultLayout;