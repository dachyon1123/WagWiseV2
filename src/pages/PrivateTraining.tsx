import { Title, Button, Text } from "@mantine/core"
import { Link } from "react-router-dom"
import { useEffect } from "react"

import Header from "../components/Header/Header"
import Banner from "../components/Homepage/Banner"
import BlockOne from "../components/Blocks/BlockOne"
import HowItWorks from "../components/DogTraining/HowItWorks"
import Footer from "../components/Footer/Footer"

import styles from '../styles/PrivateTraining.module.css'

import bannerPicture from '../assets/pictures/dogTraining.webp'



const privateTraining = {
    title: 'Private Dog Training',
    text: 'Get personalized help with your dog from a certified dog trainer.',
    buttonText: 'View Rates',
    buttonLink: '/rates'
}

const blockOneInfo = {
    title: 'How Does It Work?',
    text: 'I provide 1 hour, one-on-one training sessions with your dog and I, where I provide you and your dog with the tools needed to make your dog into his best self. I use positive reinforcement training and reward-based methods. '
}

const howItWorks = [
    {
        step: 1,
        title: "Schedule Your Session",
        text: "Simply book a convenient time for your one-hour personalized training session. I’ll gather some basic info about your dog to tailor the session to their specific needs."
    },
    {
        step: 2,
        title: "Personalized Training Plan",
        text: "Before the session, I'll create a customized plan based on your dog’s behavior, temperament, and training goals. Whether it’s basic obedience, problem behaviors, or advanced training, I'm here to help."
    },
    {
        step: 3,
        title: "One-on-One Training",
        text: "During the session, you and your dog will work directly with me. You’ll receive hands-on guidance, practical exercises, and real-time feedback to address specific challenges and reinforce positive behavior."
    },
    {
        step: 4,
        title: "Interactive Learning",
        text: "I believe in training both dogs and their owners! You’ll learn key techniques and commands to continue reinforcing the training at home, ensuring long-lasting results."
    },
    {
        step: 5,
        title: "Follow-Up & Support",
        text: "After the session, I'll provide additional tips and resources to help you maintain progress. If needed, I'm always available for follow-up questions or additional sessions."
    }
];


export default function PrivateTraining() {

    useEffect(() => {
        document.title = 'WagWise - Personalized Private Dog Training';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <Header />
            <Banner title={privateTraining.title} text={privateTraining.text} image={bannerPicture} buttonText={privateTraining.buttonText} buttonLink={privateTraining.buttonLink} />
            <BlockOne title={blockOneInfo.title} text={blockOneInfo.text} />

            <Title className={styles.title} order={2}>
                Getting Started
            </Title>

            {howItWorks.map((item) => {
                return <HowItWorks title={item.title} text={item.text} />
            })}

            <Link to='/contact-me'>
                <Button className={styles.contactButton} display='block' mx='auto' mt={60} mb={20}>
                    <Text size="md" pl={10} className={styles.contactButtonText}>Contact Me</Text>
                </Button>
            </Link>

            <Footer />
        </>
    )
}