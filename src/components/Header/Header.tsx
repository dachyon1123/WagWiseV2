import { Group, Title, Box, Flex, Image } from "@mantine/core"
import { Link } from "react-router-dom"

import styles from '../../styles/Header.module.css'
import '../../assets/Fonts/fonts.css'

import Logo1900 from '../../assets/headerAssets/logo.svg'
import Logo from "./Logo"
import NavbarPhoneTablet from "./NavBarPhoneTablet"
import Navbar1900 from "./NavBar1900"

const navObjLeft = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Private Training',
        link: '/private-training'
    },
    {
        text: 'Board & Train',
        link: '/board-&-train'
    },
]

const navObjRight = [
    {
        text: 'Overnight Boarding',
        link: '/overnight-boarding'
    },
    {
        text: 'FAQ',
        link: '/faq'
    },
    {
        text: 'Rates',
        link: '/rates'
    },
    {
        text: 'Contact',
        link: '/contact-me'
    }
]

export default function Header() {
    return (
        <>
            {window.innerWidth > 1900 ?
                <Group className={styles.group1900} >
                    <Image src={Logo1900} className={styles.image} />
                    <Box className={styles.box}>
                        <Flex className={styles.navLinks}>
                            {navObjLeft.map((e) => {
                                return <Navbar1900 text={e.text} link={e.link} />
                            })}
                        </Flex>
                        <Link to='/' className={styles.titleLink}>
                            <Title className={styles.title1900}>WagWise</Title>
                        </Link>
                        <Flex className={styles.navLinks}>
                            {navObjRight.map((e) => {
                                return <Navbar1900 text={e.text} link={e.link} />
                            })}
                        </Flex>
                    </Box>
                </Group>
                :
                <Group justify="space-between">
                    <Logo />
                    <Link to='/' className={styles.title}>
                        <Title>WagWise</Title>
                    </Link>
                    <NavbarPhoneTablet />
                </Group>

            }
        </>
    )
}