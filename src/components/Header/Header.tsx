import { Group, Title } from "@mantine/core"

import Logo from "./Logo"
import Navbar from "./NavBar"

export default function Header() {
    return (
        <Group
            justify="space-between"
        >
            <Logo />
            <Title>WagWise</Title>
            <Navbar />
        </Group>
    )
}