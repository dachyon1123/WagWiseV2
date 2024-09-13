import { Stack, Text, Title, Button, Image } from "@mantine/core";
import styles from '../../styles/Banner.module.css'

import callIcon from '../../assets/bannerAssets/callIcon.svg'

export default function Banner() {
    return (
        <Stack className={styles.bannerContainer}>
            <Title order={3} className={styles.bannerTitle}>
                Find out how WagWise Dog Training can help you and your dog or puppy today!
            </Title>
            <Text className={styles.bannerText}>
                I offer comprehensive training for dogs and puppies. Whatever your goals are for you and your pup, I can help you meet them.
            </Text>
            {/* Add functionality to pull up phone call on iphone when clicking this */}
            <Button className={styles.contactButton}>
                <Image src={callIcon} h={24}/>
                <Text size="md" pl={10}>737-420-6053</Text>
            </Button>
        </Stack>
    )
}