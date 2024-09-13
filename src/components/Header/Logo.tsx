
import { Image } from '@mantine/core'
import logoSvg from '../../assets/headerAssets/logo.svg'

export default function Logo() {
    return (
        <Image 
            src={logoSvg}
            h={40}
            fit='contain'
            m={10}
        />
    )
}