import { Title, Text, Stack } from "@mantine/core";

import styles from '../../styles/Behavior.module.css'
import '../../assets/Fonts/fonts.css'

interface behaviorInterface {
    title: string,
    text: string
}

export default function StopBehaviors({ title, text }: behaviorInterface) {
    return (
        <Stack className={styles.container}> 
            <Title order={2} className={styles.title} style={{fontFamily: 'Tenor Sans, sans serif' }}>
                {title}
            </Title>
            <Text className={styles.text} style={{fontFamily: 'Open Sans Light, sans serif' }}>
                {text}
            </Text>
        </Stack>
    )
}