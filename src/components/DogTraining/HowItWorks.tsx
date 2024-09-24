import { Title, Text, Stack } from "@mantine/core"

import styles from '../../styles/DogTraining.module.css'

interface dogTrainingInterface {
  title: string,
  text: string,
}

export default function HowItWorks({ title, text }: dogTrainingInterface) {
  return (
    <Stack className={styles.container}>
      <Title order={4}>
        {title}
      </Title>
      <Text>
        {text}
      </Text>
    </Stack>
  )
}