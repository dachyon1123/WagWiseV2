import { Table } from "@mantine/core"

import styles from '../../styles/Rates.module.css'

const rates = [
    { service: 'Private Training', price: 12.011,},
    { service: 'Board and Train', price: 14.007,},
    { service: 'Overnight Boarding', price: 88.906,},
  ];

export default function RatesTable() {
    const table = rates.map((service) => (
        <Table.Tr key={service.service}>
            <Table.Td>{service.service}</Table.Td>
            <Table.Td>{service.price}</Table.Td>
        </Table.Tr>
    ));


    return (
        <Table className={styles.container}>
            <Table.Thead>
                <Table.Tr className={styles.tableHeaderRow}>
                    <Table.Th className={styles.tableHeader}>Services</Table.Th>
                    <Table.Th className={styles.tableHeader}>Prices</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody className={styles.tableBody} style={{fontFamily: 'Open Sans Light, sans serif'}}>{table}</Table.Tbody>
        </Table>
    )
}