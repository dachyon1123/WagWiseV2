import { Paper, Stack, Text, Title, Image } from "@mantine/core"
import styles from '../../../styles/CustomerReviewStyles.module.css'

import quotes from '../../../assets/CustomerReviewAssets/quotes.svg'

interface reviewInterface {
    reviewer: string,
    reviewText: string,
}

export default function CustomerReviews({ reviewer, reviewText }: reviewInterface) {
    return (
            <Stack className={styles.container}>
                <Paper className={styles.paper}>
                    <Text className={styles.text} >
                        <Image src={quotes} w={64} h={64} />
                        {reviewText}
                    </Text>
                    <Title className={styles.title} order={4}>{reviewer}</Title>
                </Paper>
            </Stack>
    )
}