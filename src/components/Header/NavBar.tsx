import { Flex, Title, Drawer, Button, Stack, Image, useMantineTheme } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { Link } from "react-router-dom";
import drawerIcon from '../../assets/headerAssets/drawer.svg'


import styles from '../../styles/Demo.module.css'

export default function Navbar() {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Flex
            justify="center"
            gap={10}
        >
            <Drawer opened={opened} onClose={close} position="right" size="65%">
                <Stack gap='xl'>
                    <Title order={4} ta='right'>Home</Title>
                    <Title order={4} ta='right'>Dog Training</Title>
                    <Title order={4} ta='right'>Dog Boarding</Title>
                    <Title order={4} ta='right'>FAQ</Title>
                    <Title order={4} ta='right'>Contact</Title>
                </Stack>
            </Drawer>

            <Button 
                onClick={open} 
                className={styles.drawerHover}
                size="xs"
                h={50}
                >
                <Image src={drawerIcon} /> 
            </Button>
        </Flex>
    )
}

{/* <Image src={drawerIcon} /> */ }