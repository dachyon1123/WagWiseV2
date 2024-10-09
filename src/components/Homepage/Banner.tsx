import { Box, Stack, Text, Title, Button, BackgroundImage } from "@mantine/core";

import styles from '../../styles/Banner.module.css'
import '../../assets/Fonts/fonts.css'


interface bannerContent {
    title: string,
    text: string,
    image: string;
    buttonText: string

}

export default function Banner({ title, text, image, buttonText }: bannerContent) {
    return (
        <BackgroundImage src={image} className={styles.image}>
            <Box className={styles.bannerContainer}>
                <Stack className={styles.innerContainer}>
                    {title === "Rates" ?
                        <Title order={1} className={styles.bannerTitleRates} style={{ fontFamily: 'Open Sans Bold, sans serif' }}>
                            {title}
                        </Title>
                        :
                        <Title order={1} className={styles.bannerTitle} style={{ fontFamily: 'Open Sans Bold, sans serif' }}>
                            {title}
                        </Title>
                    }


                    <Text className={styles.bannerText} style={{ fontFamily: 'Open Sans, sans serif' }}>
                        {text}
                    </Text>
                    {/* Add functionality to pull up phone call on iphone when clicking this */}
                    {buttonText
                        ?
                        <Button className={styles.contactButton}>
                            <Text size="md" className={styles.contactButtonText}>{buttonText}</Text>
                        </Button>
                        :
                        <Stack h={100}>

                        </Stack>
                    }
                </Stack>
            </Box>
        </BackgroundImage>

    )
}