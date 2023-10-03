import React from 'react'
import { Spinner, Center } from 'native-base'

export const Loading = () => {
  return (
<Center flex={1} bg="gray.700">
<Spinner size="sizes.33" color="green.600"/>
</Center>
  )
}
