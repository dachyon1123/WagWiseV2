import { Stack, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/Header/Header";
import Banner from "../components/Homepage/Banner";
import BoardingInfo from "../components/OvernightBoarding/BoardingInfo";
import Footer from "../components/Footer/Footer";

import styles from '../styles/OvernightBoarding.module.css'

import overnightBoardingImage from '../assets/pictures/overnightBoardingImage.webp'

const bannerInfo = {
    title: 'Overnight Boarding',
    text: "Enjoy peace of mind while you're away, knowing your dog is safe, comfortable, and cared for with personalized overnight boarding services.",
    // text: "Our overnight boarding service provides a safe and comfortable environment for your dog, ensuring they are well cared for while you're away. With 24/7 supervision, structured routines, and plenty of social interaction, your pet will enjoy a home-away-from-home experience. This service offers peace of mind for pet owners, knowing their dogs are in good hands and receiving the attention they deserve.",
    buttonText: 'View Rates',
    buttonLink: '/rates'
}

const sellingPoints = [
    {
        title: "24/7 Supervision",
        description:
            "Your dog will be cared for around the clock, ensuring their safety and well-being. This constant supervision provides peace of mind, knowing that help is always available in case of an emergency."
    },
    {
        title: "Structured Routine",
        description:
            "Daily activities, including exercise, meals, and relaxation, create a predictable and comforting environment for your dog. A consistent schedule helps reduce anxiety, making the stay enjoyable and stress-free for your pet."
    },
    {
        title: "Social Interaction",
        description:
            "Opportunities for your dog to play and interact with other dogs in a safe, supervised setting. These play sessions promote healthy socialization, helping dogs build confidence and practice good behavior around other pets."
    },
    {
        title: "Comfort and Security",
        description:
            "Cozy accommodations designed to make your dog feel at home, with spaces that cater to their individual needs. From soft bedding to climate-controlled environments, we ensure every dog’s comfort is a priority."
    },
    {
        title: "Personalized Care",
        description:
            "Tailored services to match your dog’s dietary and medical requirements, including medication administration. I will follow your specific care instructions to maintain your dog’s routine and health needs."
    },
    {
        title: "Peace of Mind",
        description:
            "Owners can enjoy their time away knowing their pet is receiving professional care and attention. Regular updates, including photos and videos, allow you to stay connected and reassured that your dog is thriving."
    },
    {
        title: "Field Trips and Enrichment",
        description:
            "Some services offer extras like field trips to parks or additional playtime for mental stimulation and fun. These activities break the routine, providing your dog with exciting new environments and experiences to explore."
    }
];



export default function OvernightBoarding() {

    useEffect(() => {
        document.title = 'WagWise - Overnight Dog Boarding';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Stack>
            <Header />
            <Banner title={bannerInfo.title} text={bannerInfo.text} image={overnightBoardingImage} buttonText={bannerInfo.buttonText} buttonLink={bannerInfo.buttonLink} />
            <Text className={styles.text}>My overnight boarding service provides a safe and comfortable environment for your dog, ensuring they are well cared for while you're away. With 24/7 supervision, structured routines, and plenty of social interaction, your pet will enjoy a home-away-from-home experience. This service offers peace of mind for pet owners, knowing their dogs are in good hands and receiving the attention they deserve.</Text>
            {sellingPoints.map((e) => {
                return <BoardingInfo title={e.title} text={e.description} />
            })}
            <Link to='/contact-me' className={styles.link}>
                <Button className={styles.button}>
                    <Text className={styles.buttonText}>Contact Me</Text>
                </Button>
            </Link>
            <Footer />
        </Stack>
    )
}