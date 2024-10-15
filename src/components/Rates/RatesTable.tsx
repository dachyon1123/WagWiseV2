import { Title, Text, Stack, Flex } from '@mantine/core';

import styles from '../../styles/Rates.module.css'

const rates = [
    { service: 'Private Training', price: '$200/hr',},
    { service: 'Board and Train', price: '$200/night',},
    { service: 'Overnight Boarding', price: '$100/night',},
  ];

export default function RatesTable() {

    return (
        <Stack className={styles.container}>
            {rates.map((e) => {
                return (
                <Flex className={styles.innerContainer}>
                    <Title className={styles.title}>{e.service}</Title>
                    <Text className={styles.text}>{e.price}</Text>
                </Flex>
                )
            })}
        </Stack>
    )
}