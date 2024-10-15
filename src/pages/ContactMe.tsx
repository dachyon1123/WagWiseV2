import { Stack, Text, Image } from "@mantine/core";
import { useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from '../styles/ContactMe.module.css'
import '../assets/Fonts/fonts.css'

import ContactMeImage from '../assets/pictures/ContactMeImage.webp'

export default function ContactMe() {

    useEffect(() => {
        document.title = 'WagWise - Contact Me - Private Dog Training, Dog Board and Train, Overnight Dog Boarding';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Stack gap={0} className={styles.container}>
            <Header />
            <Stack style={{ justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
                <Text className={styles.textSmall} style={{ fontFamily: 'Open Sans Semi-Bold, sans serif' }} >
                    Call or email me with any questions or concerns
                </Text>
                <Text className={styles.text} style={{ fontFamily: 'Open Sans Semi-Bold, sans serif' }}>
                    512-835-3634
                </Text>
                <Text className={styles.text} style={{ fontFamily: 'Open Sans Semi-Bold, sans serif' }}>
                    wagwiseaustin@gmail.com
                </Text>
            </Stack>
            <Image src={ContactMeImage} className={styles.image} />
            <Footer />
        </Stack>
    )
}