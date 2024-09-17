import { Title, Text, Stack } from "@mantine/core"

import styles from '../../styles/WhatIsBoard.module.css'
import '../../assets/Fonts/fonts.css'

interface BlockOneInterface {
    title: string,
    text: string,
}

export default function BlockOne({ title, text }: BlockOneInterface) {
    return (
        <Stack>
            <Title className={styles.title} style={{fontFamily: 'Open Sans Light, sans-serif'}} order={2}>
                {title}
            </Title>
            <Text className={styles.text}>
                {text}
            </Text>
        </Stack>
    )
}
