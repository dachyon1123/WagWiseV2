import { Title, Text, Stack, List } from "@mantine/core"

import styles from '../../styles/BlockTwo.module.css'
import '../../assets/Fonts/fonts.css'

interface BlockTwoInterface {
    title: string,
    text: string,
    listItems: string[],
}

export default function BlockTwo({ title, text, listItems }: BlockTwoInterface) {
    return (
        <Stack className={styles.container}>
            <Title className={styles.title} style={{ fontFamily: 'Open Sans Light, sans-serif' }} order={2}>
                {title}
            </Title>
            <Stack>
                <Text className={styles.text}>
                    {text}
                </Text>

                <List className={styles.list}>
                    {listItems.map((item) => {
                        return <List.Item style={{fontFamily: 'Open Sans Light, sans serif'}}>{item}</List.Item>
                    })}
                </List>
            </Stack>
        </Stack>
    )
}
