import { Title } from "@mantine/core"

import styles from '../../../styles/CustomerReviewStyles.module.css'

import '../../../assets/Fonts/fonts.css'

interface titleInterface {
    title: string
}

export default function TitleComponent({ title }: titleInterface) {
    return (
        <Title order={1} ta="center" style={{fontFamily: 'Tenor Sans, sans serif'}} className={styles.titleComponent}>{title}</Title>
    )
}