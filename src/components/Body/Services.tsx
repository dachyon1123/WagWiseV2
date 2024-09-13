import { Stack, Image, Text, Title } from "@mantine/core"

import styles from '../../styles/Services.module.css'

export default function Services() {
    return (
        <section>
            <Stack className={styles.container}>
                <Image className={styles.images} src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' />
                <Title className={styles.title} order={4}>
                    Board and Train
                </Title>
                <Text className={styles.text}>
                    Complete Obedience Training
                </Text>

                <Image className={styles.images} src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' />
                <Title className={styles.title} order={4}>
                    Overnight Boarding
                </Title>
                <Text className={styles.text}>
                    Accomodations
                </Text>

                <Image className={styles.images} src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png' />
                <Title className={styles.title} order={4}>
                    Private Sessions
                </Title>
                <Text className={styles.text}>
                    Form a Bond With Your Dog
                </Text>
            </Stack>
        </section>
    )
}