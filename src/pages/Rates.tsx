import { Stack } from "@mantine/core";

import Header from "../components/Header/Header";
import Banner from "../components/Homepage/Banner";
import RatesTable from "../components/Rates/RatesTable";
import Footer from "../components/Footer/Footer";

import ratesImage from '../assets/pictures/rates.webp'

const ratesObj = {
    title: 'Rates',
    text: ''
}

export default function RatesPage() {
    return (
        <Stack style={{justifyContent: 'space-between', height: '100vh'}}>
            <Header />
            <Banner title={ratesObj.title} text={ratesObj.text} image={ratesImage} buttonText="Contact Me"/>
            <RatesTable />
            <Footer />
        </Stack>
    )
}