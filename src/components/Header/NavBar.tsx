import { Flex, Title, Drawer, Button, Stack, Image} from "@mantine/core"
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
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>Home</Title>
                    </Link>

                    <Link to='/private-training' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>Private Training</Title>
                    </Link>

                    <Link to='/board-&-train' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>Board and Train</Title>
                    </Link>

                    <Link to='/overnight-boarding' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>Overnight Boarding</Title>
                    </Link>

                    <Link to='/FAQ' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>FAQ</Title>
                    </Link>

                    <Link to='/rates' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>Rates</Title>
                    </Link>
                    
                    <Link to='/contact-me' style={{textDecoration: 'none', color: 'black'}}>
                        <Title order={4} ta='right'>Contact</Title>
                    </Link>
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