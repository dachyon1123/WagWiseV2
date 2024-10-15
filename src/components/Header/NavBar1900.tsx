import { Text } from "@mantine/core"
import { Link } from "react-router-dom";

import styles from '../../styles/NavBar1900.module.css'


interface NavInterface {
    text: string,
    link: string,
}

export default function Navbar1900({ text, link }: NavInterface) {

    return (
        <Link to={link}>
            <Text className={styles.text}>{text}</Text>
        </Link>
    )
}

