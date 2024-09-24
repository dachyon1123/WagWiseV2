import { Collapse, Text, Group, Button, Box, Image } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";

import arrow from '../../assets/FaqAssets/arrow.svg'

import styles from '../../styles/Faq.module.css'
import '../../assets/Fonts/fonts.css'

interface faqInterface {
    title: string,
    text: string,
}

export default function CollapseFaq({ title, text }: faqInterface) {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Box maw={400} mx="auto" className={styles.container}>
            <Group justify="center"className={styles.buttonContainer}>
                { opened 
                    ?
                    <Button onClick={toggle} className={styles.button}><Image src={arrow} className={styles.arrow} />{title}</Button>
                    :
                    <Button onClick={toggle} className={styles.button}><Image src={arrow} className={styles.arrow} />{title}</Button>
                }
            </Group>

            <Collapse in={opened} className={styles.collapse}>
                <Text className={styles.collapseText} style={{fontFamily: 'Tenor Sans, sans serif'}}>{text}</Text>
            </Collapse>
        </Box>
    )
}