import { Flex, Title, Drawer, Button, Stack, Image} from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { Link } from "react-router-dom";
import drawerIcon from '../../assets/headerAssets/drawer.svg'


import styles from '../../styles/Demo.module.css'

export default function NavbarPhoneTablet() {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Flex
            justify="center"
            gap={10}
        >
            <Drawer opened={opened} onClose={close} position="right" className={styles.drawer}>
                <Stack gap='lg'>
                    <Link to='/' className={styles.link}>
                        <Title order={4} className={styles.title}>Home</Title>
                    </Link>

                    <Link to='/private-training' className={styles.link}>
                        <Title order={4} className={styles.title}>Private Training</Title>
                    </Link>

                    <Link to='/board-&-train' className={styles.link}>
                        <Title order={4} className={styles.title}>Board and Train</Title>
                    </Link>

                    <Link to='/overnight-boarding' className={styles.link}>
                        <Title order={4} className={styles.title}>Overnight Boarding</Title>
                    </Link>

                    <Link to='/FAQ' className={styles.link}>
                        <Title order={4} className={styles.title}>FAQ</Title>
                    </Link>

                    <Link to='/rates' className={styles.link}>
                        <Title order={4} className={styles.title}>Rates</Title>
                    </Link>
                    
                    <Link to='/contact-me' className={styles.link}>
                        <Title order={4} className={styles.title}>Contact</Title>
                    </Link>
                </Stack>
            </Drawer>

            <Button 
                onClick={open} 
                className={styles.drawerHover}
                >
                <Image src={drawerIcon} /> 
            </Button>
        </Flex>
    )
}

{/* <Image src={drawerIcon} /> */ }