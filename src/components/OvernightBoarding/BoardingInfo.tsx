import { Title, Text, Stack } from "@mantine/core"

import styles from '../../styles/BoardingInfo.module.css'
import '../../assets/Fonts/fonts.css'

interface BoardingInfoInterface {
    title: string,
    text: string,
}

export default function BoardingInfo({ title, text }: BoardingInfoInterface) {
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
