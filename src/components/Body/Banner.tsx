import { Stack, Text, Title, Button, Image } from "@mantine/core";
import styles from '../../styles/Banner.module.css'

import callIcon from '../../assets/bannerAssets/callIcon.svg'

interface bannerContent {
    title: string,
    text: string,

}

export default function Banner({ title, text }: bannerContent) {
    return (
        <Stack className={styles.bannerContainer}>
            <Title order={3} className={styles.bannerTitle}>
                {title}
            </Title>
            <Text className={styles.bannerText}>
                {text}
            </Text>
            {/* Add functionality to pull up phone call on iphone when clicking this */}
            <Button className={styles.contactButton}>
                <Image src={callIcon} h={24}/>
                <Text size="md" pl={10}>737-420-6053</Text>
            </Button>
        </Stack>
    )
}