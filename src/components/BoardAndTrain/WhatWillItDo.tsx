import { Title, Text, Stack, List } from "@mantine/core"

import styles from '../../styles/WhatWillItDo.module.css'
import '../../assets/Fonts/fonts.css'

export default function WhatWillItDo() {
    return (
        <Stack className={styles.container}>
            <Title className={styles.title} style={{ fontFamily: 'Open Sans Light, sans-serif' }} order={2}>
                What Can Our Board and Train Program Do for You and Your Dog?            </Title>
            <Stack>
                <Text className={styles.text}>Our Board and Train Obedience Programs offer a highly effective solution to achieve all your dog training and puppy training objectives!</Text>

                <List className={styles.list}>
                    <List.Item style={{fontFamily: 'Open Sans Light, sans serif'}}>Prevent unwanted behaviors through a personalized training plan tailored to your dog's unique needs.</List.Item>
                    <List.Item style={{fontFamily: 'Open Sans Light, sans serif'}}>Address and eliminate challenging, bothersome, or even dangerous behaviors in adolescent or adult dogs</List.Item>
                    <List.Item style={{fontFamily: 'Open Sans Light, sans serif'}}>Foster lasting peace and harmony in your home.</List.Item>
                    <List.Item style={{fontFamily: 'Open Sans Light, sans serif'}}>Establish a solid obedience foundation that you can continue to build on for years to come.</List.Item>
                </List>
            </Stack>
        </Stack>
    )
}
