import { Stack, Title, Text, Divider, Button } from "@mantine/core"

import styles from '../../styles/InfoBlocks.module.css'

interface InfoBlockInterface {
    id: number,
    title: string,
    text: string,
    buttonText: string,
}

export default function InfoBlocks({ id, title, text, buttonText }: InfoBlockInterface) {
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
                    <Button className={styles.button}>{buttonText}</Button> 
                    :
                    <></>
                    }
                </Stack>
            </Stack>
        </section>
    )
}