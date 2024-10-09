import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import styles from '../../styles/Carousel.module.css'

const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

export default function CarouselComponent() {
    const slides = images.map((url) => (
        <Carousel.Slide key={url} className={styles.slides}>
            <Image src={url} className={styles.image} />
        </Carousel.Slide>
    ));

    return <Carousel withIndicators loop={true} className={styles.carousel}>{slides}</Carousel>;
}