import { Stack, Image, Text, Title } from "@mantine/core"
import { Link } from "react-router-dom"

import styles from '../../styles/Services.module.css'

import dogBoardingPicture from '../../assets/pictures/BradleyAndDogs.webp'
import overNightPic from '../../assets/pictures/boardingPic.webp'
import privateTrainingImage from '../../assets/pictures/homepagePrivateTrainingImage.webp'

export default function Services() {
    return (
        <section>
            <Stack className={styles.container}>

                <Link to='/board-&-train' className={styles.links}>
                    <Image className={styles.images} src={dogBoardingPicture} />
                    <Title className={styles.title} order={4}>
                        Board and Train
                    </Title>
                    <Text className={styles.text}>
                        Complete Obedience Training
                    </Text>
                </Link>

                <Link to='/training' className={styles.links}>
                    <Image className={styles.images} src={privateTrainingImage} />
                    <Title className={styles.title} order={4}>
                        Private Sessions
                    </Title>
                    <Text className={styles.text}>
                        Form a Bond With Your Dog
                    </Text>
                </Link>

                <Link to='/overnight-boarding' className={styles.links}>
                    <Image className={styles.images} src={overNightPic} />
                    <Title className={styles.title} order={4}>
                        Overnight Boarding
                    </Title>
                    <Text className={styles.text}>
                        Accomodations
                    </Text>
                </Link>
                
            </Stack>
        </section>
    )
}