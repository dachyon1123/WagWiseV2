import { Flex, Title, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import styles from '../../styles/Footer.module.css'
import '../../assets/Fonts/fonts.css'

import logo from '.././../assets/headerAssets/logo.svg'

export default function Footer() {
    return (
        <footer>
            <Flex className={styles.container}>
                <Link to='/' className={styles.link}>
                    <Flex className={styles.leftContainer}>
                        <Image className={styles.image} src={logo}/>
                        <Title order={4} style={{fontFamily: 'Tenor Sans, sans serif'}} className={styles.title}>WagWise</Title>
                    </Flex>
                </Link>
                
                <Flex className={styles.rightContainer}>
                    <Link to='/faq' className={styles.link}>
                        <Text className={styles.text}>FAQ</Text>
                    </Link>

                    <Link to='/contact-me' className={styles.link}>
                        <Text className={styles.text}>Contact</Text>
                    </Link>

                    <a href="https://www.instagram.com/wagwisetx/" style={{textDecoration: 'none'}}>
                        <Text className={styles.text}>Instagram</Text>
                    </a>
                </Flex>
            </Flex>
        </footer>
    )
}