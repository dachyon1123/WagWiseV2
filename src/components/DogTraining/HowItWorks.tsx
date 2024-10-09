import { Title, Text, Stack } from "@mantine/core"

import styles from '../../styles/HowItWorks.module.css'

interface dogTrainingInterface {
  title: string,
  text: string,
}

export default function HowItWorks({ title, text }: dogTrainingInterface) {
  return (
    <Stack className={styles.container}>
      <Title order={4} className={styles.title}>
        {title}
      </Title>
      <Text className={styles.text}>
        {text}
      </Text>
    </Stack>
  )
}