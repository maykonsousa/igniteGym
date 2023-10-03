import React from 'react'
import {VStack, Image} from 'native-base'
import BackgroundImg from '@assets/background.png'

export const SignIn = () => {
  return (
    <VStack>
      <Image 
      source={BackgroundImg} 
      alt="Imagem de fundo com pessoas treinando"
      resizeMode='contain'
      position={'absolute'}
       />
    </VStack>
  )
}
