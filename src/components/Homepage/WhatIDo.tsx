import { Stack, Title, Text } from "@mantine/core";

import styles from '../../styles/WhatIDo.module.css'

export default function WhatIDo() {
    return (
        <Stack className={styles.container} gap={0}>
            <Title order={3} className={styles.title}>
                What I Do
            </Title>
            <Text className={styles.text}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem proin potenti augue auctor fusce curae faucibus. Facilisis maecenas id pharetra tempor natoque aenean dolor enim. Mi fermentum purus tellus volutpat amet pellentesque. Quisque vulputate efficitur ornare volutpat elementum pretium. Cursus aenean aliquam porttitor phasellus vehicula curae. Congue pharetra primis curabitur lobortis mi aliquam justo. Varius nostra eros litora phasellus; fames netus. Fermentum ac donec at fermentum nisi dapibus tellus. Phasellus placerat ipsum velit dictumst proin blandit nulla.

                Ut vel mauris class ipsum metus, curae ante justo. Dignissim elementum scelerisque penatibus ridiculus; et praesent metus. Laoreet pharetra aliquet iaculis lectus nibh facilisis. Posuere nascetur leo elementum auctor tellus aliquam mauris. Nisi volutpat lacus iaculis nisl dictum curabitur viverra. Cubilia convallis lobortis nam ornare at ornare ut.
            </Text>
        </Stack>
    )
}