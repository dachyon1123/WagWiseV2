import { Stack } from "@mantine/core";
import { useEffect } from "react";

import Header from "../components/Header/Header";
import Banner from "../components/Homepage/Banner";
import RatesTable from "../components/Rates/RatesTable";
import Footer from "../components/Footer/Footer";

import ratesImage from '../assets/pictures/rates.webp'

const ratesObj = {
    title: 'Rates',
    text: '',
    buttonLink: '/contact-me'
}

export default function RatesPage() {

    useEffect(() => {
        document.title = 'WagWise - Prviate Dog Training, Overnight Dog Boarding, and Dog Board and Train - Rates';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Stack gap={0}>
            <Header />
            <Banner title={ratesObj.title} text={ratesObj.text} image={ratesImage} buttonText="Contact Me" buttonLink={ratesObj.buttonLink} />
            <RatesTable />
            <Footer />
        </Stack>
    )
}