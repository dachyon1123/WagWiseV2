import { Title, Text, Stack } from "@mantine/core"

import styles from '../../styles/WhatIsBoard.module.css'
import '../../assets/Fonts/fonts.css'

export default function WhatIsBoard() {
    return (
        <Stack>
            <Title className={styles.title} style={{fontFamily: 'Open Sans Light, sans-serif'}} order={2}>
                What is Board and Train?
            </Title>
            <Text className={styles.text}>
                During your dogs stay, I will provide daily training sessions to build a solid obedience foundation and address any behavioral issues. Your dog will be taught to respond consistently to verbal commands and hand signals—without the need for harsh corrections or e-collars. Through fun and stimulating exercises, your dog will quickly develop proper manners, confidence, and self-control, ensuring they return home with royal poise!
            </Text>
        </Stack>
    )
}
