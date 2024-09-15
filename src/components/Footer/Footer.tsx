import { Flex, Title, Image, Text } from "@mantine/core";

import styles from '../../styles/Footer.module.css'

import logo from '.././../assets/headerAssets/logo.svg'

export default function Footer() {
    return (
        <footer>
            <Flex className={styles.container}>
                <Flex className={styles.leftContainer}>
                    <Image className={styles.image} src={logo} h={32} w={32} />
                    <Title order={4}>WagWise</Title>
                </Flex>
                
                <Flex className={styles.rightContainer}>
                    <Text className={styles.text}>FAQ</Text>
                    <Text className={styles.text}>Contact</Text>
                    <Text className={styles.text}>Instagram</Text>
                </Flex>
            </Flex>
        </footer>
    )
}