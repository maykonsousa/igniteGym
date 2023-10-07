import React from 'react'
import {VStack, Image, Text, Center} from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSVG from '@assets/logo.svg'
export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <Image 
      source={BackgroundImg} 
      alt="Imagem de fundo com pessoas treinando"
      resizeMode='contain'
      position={'absolute'}
       />
       <Center my={24}>
        <LogoSVG  />
        <Text color="white">Treine sua mente e seu corpo</Text>
       </Center>
    </VStack>
  )
}
