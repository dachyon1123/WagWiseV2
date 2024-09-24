import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
];

export default function CarouselComponent() {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return <Carousel withIndicators loop={true} mt={40}>{slides}</Carousel>;
}