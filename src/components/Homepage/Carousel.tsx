import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import styles from '../../styles/Carousel.module.css'
import offLeashPic from '../../assets/pictures/OffLeashPic.webp'
import wellTrainedPic from '../../assets/pictures/WellTrained.webp'
import bradleyProfilePic from '../../assets/pictures/bradleyProfilePicture.webp'
import cityPicture from '../../assets/pictures/cityPicture.webp'

const images = [
    bradleyProfilePic,
    offLeashPic,
    wellTrainedPic,
    cityPicture,
];

export default function CarouselComponent() {
    const slides = images.map((url) => (
        <Carousel.Slide key={url} className={styles.slides}>
            <Image src={url} className={styles.image} />
        </Carousel.Slide>
    ));

    return <Carousel withIndicators loop={true} className={styles.carousel}>{slides}</Carousel>;
}