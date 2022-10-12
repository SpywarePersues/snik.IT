import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { ShoeData } from '../../utils/data'

function SneakersScreen(props) {
    const { shoeData } = props;
    if (!shoeData) {
        return <ContainerBlock title="Produt Not Found"><h1 className='text-center py-6 text-4xl'>Sorry 😔</h1></ContainerBlock>;
    }
    return (
        <ContainerBlock>

        </ContainerBlock>
    )
}

export default SneakersScreen