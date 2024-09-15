import InfoBlockProps from '../assets/infoBockAssets/infoBlockObj'
import customerReviewProps from '../assets/CustomerReviewAssets/customerReviewObj'

import Header from '../components/Header/Header'
import Banner from '../components/Body/Banner';
import CarouselComponent from '../components/Body/Carousel';
import MyStory from '../components/Body/MyStory';
import WhatIDo from '../components/Body/WhatIDo';
import Services from '../components/Body/Services';
import InfoBlocks from '../components/Body/InfoBlocks';
import TitleComponent from '../components/Body/CustomerReviews/TitleComponent';
import CustomerReviews from '../components/Body/CustomerReviews/CustomerReviews';
import Footer from '../components/Footer/Footer';


export default function Homepage() {

    return (
        <>
            <Header />
            <Banner 
                title='Find out how WagWise Dog Training can help you and your dog or puppy today!'
                text='I offer comprehensive training for dogs and puppies. Whatever your goals are for you and your pup, I can help you meet them.'
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

