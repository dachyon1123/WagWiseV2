import InfoBlockProps from '../assets/infoBockAssets/infoBlockObj'
import customerReviewProps from '../assets/CustomerReviewAssets/customerReviewObj'

import Header from '../components/Header/Header'
import Banner from '../components/Homepage/Banner';
import CarouselComponent from '../components/Homepage/Carousel';
import MyStory from '../components/Homepage/MyStory';
import WhatIDo from '../components/Homepage/WhatIDo';
import Services from '../components/Homepage/Services';
import InfoBlocks from '../components/Homepage/InfoBlocks';
import TitleComponent from '../components/Homepage/CustomerReviews/TitleComponent';
import CustomerReviews from '../components/Homepage/CustomerReviews/CustomerReviews';
import Footer from '../components/Footer/Footer';

import bannerImage from '../assets/pictures/homepageBannerImage.webp'


export default function Homepage() {

    return (
        <>
            <Header />
            <Banner 
                title='Find out how WagWise Dog Training can help you and your dog or puppy today!'
                text='I offer comprehensive training for dogs and puppies. Whatever your goals are for you and your pup, I can help you meet them.'
                image={bannerImage}
                buttonText='View Rates'
            />
            <CarouselComponent />
            <MyStory />
            <WhatIDo />
            <Services />
            {InfoBlockProps.map((e) => {
                return <InfoBlocks id={e.id} title={e.title} text={e.text} buttonText={e.buttonText} />
            })}
            <TitleComponent title='Customer Reviews' />
            {customerReviewProps.map((e) => {
                return <CustomerReviews key={e.id} reviewer={e.reviewer} reviewText={e.reviewText} />
            })}
            <Footer />
        </>
    )
}

