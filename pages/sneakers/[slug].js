import React from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { ShoeData } from '../../utils/data'

function SneakersScreen(props) {
    return (
        <ContainerBlock title="Something Special">
            <iframe className='block mx-auto my-[5rem]' width="727" height="409" src="https://www.youtube.com/embed/cSQTZoZPJzs?list=PLN1LPImPw_PlDRy10sDskVGszKZcbXaDn" title="Cute cat Funny video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ContainerBlock>
    )
}

export default SneakersScreen