import { Box, Stack, Text, Title, BackgroundImage } from "@mantine/core";
import { Link } from "react-router-dom";

import styles from '../../styles/Banner.module.css'
import '../../assets/Fonts/fonts.css'


interface bannerContent {
    title: string,
    text: string,
    image: string;
    buttonText: string,
    buttonLink: string,
}

export default function Banner({ title, text, image, buttonText, buttonLink }: bannerContent) {
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
                        <Link to={buttonLink} className={styles.contactButton}>
                            <Text size="md" className={styles.contactButtonText}>{buttonText}</Text>
                        </Link>
                        :
                        <Stack h={100}>

                        </Stack>
                    }
                </Stack>
            </Box>
        </BackgroundImage>

    )
}