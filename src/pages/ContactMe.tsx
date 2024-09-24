import { Stack, Text, Image } from "@mantine/core";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from '../styles/ContactMe.module.css'
import '../assets/Fonts/fonts.css'

import ContactMeImage from '../assets/pictures/ContactMeImage.webp'

export default function ContactMe() {
    return (
        <Stack gap={0} className={styles.container}>
            <Header />
            <Stack style={{ justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
                <Text ta='center' style={{fontFamily: 'Open Sans Semi-Bold, sans serif'}} fz={16}>
                    Call or email me with any questions or concerns
                </Text>
                <Text style={{fontFamily: 'Open Sans Semi-Bold, sans serif'}} fz={20}>
                    512-835-3634
                </Text>
                <Text style={{fontFamily: 'Open Sans Semi-Bold, sans serif'}} fz={20}>
                    wagwiseaustin@gmail.com
                </Text>
            </Stack>
            <Image src={ContactMeImage} className={styles.image}/>
            <Footer />
        </Stack>
    )
}