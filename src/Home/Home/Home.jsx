import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CustomerReviews from '../CustomersReviews/CustomersReviews';
import PromotionsSection from '../PromotionsSection/PromotionsSection';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    useEffect(()=>{
        document.title = 'TechToy | Home'
    },[])
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerReviews></CustomerReviews>
            <PromotionsSection></PromotionsSection>
            <ToastContainer/>
        </>
    );
};

export default Home;