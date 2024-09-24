import { Table } from "@mantine/core"

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
        <Table p={40}>
            <Table.Thead>
                <Table.Tr fz={20}>
                    <Table.Th ta='center'>Services</Table.Th>
                    <Table.Th ta='center'>Prices</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody style={{fontFamily: 'Open Sans Light, sans serif'}} ta='center'>{table}</Table.Tbody>
        </Table>
    )
}