import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CustomerReviews from '../CustomersReviews/CustomersReviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <CustomerReviews></CustomerReviews>
        </>
    );
};

export default Home;