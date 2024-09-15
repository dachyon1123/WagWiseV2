import { Group, Title } from "@mantine/core"
import { Link } from "react-router-dom"

import styles from '../../styles/Header.module.css'

import Logo from "./Logo"
import Navbar from "./NavBar"

export default function Header() {
    return (
        <Group
            justify="space-between"
        >
            <Logo />
            <Link to='/' className={styles.title}>
                <Title>WagWise</Title>
            </Link>
            <Navbar />
        </Group>
    )
}