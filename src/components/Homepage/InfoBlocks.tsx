import { Stack, Title, Text, Divider, Button } from "@mantine/core"
import { Link } from "react-router-dom"

import styles from '../../styles/InfoBlocks.module.css'

interface InfoBlockInterface {
    id: number,
    title: string,
    text: string,
    buttonText: string,
    buttonLink: string,
}

export default function InfoBlocks({ title, text, buttonText, buttonLink }: InfoBlockInterface) {
    return (
        <section>
            <Stack className={styles.container}>
                <Stack className={styles.innerContainer}>
                    <Divider size="sm" className={styles.divider} />
                    <Title className={styles.title} order={2}>
                        {title}
                    </Title>
                    <Text className={styles.text}>
                        {text}
                    </Text>

                    {buttonText != '' 
                    ? 
                    <Link to={buttonLink}><Button className={styles.button}>{buttonText}</Button> </Link>
                    :
                    <></>
                    }
                </Stack>
            </Stack>
        </section>
    )
}