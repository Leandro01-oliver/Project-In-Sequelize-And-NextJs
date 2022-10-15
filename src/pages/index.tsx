import type { NextPage } from 'next'
import {
  Button,
  SimpleGrid
} from '@chakra-ui/react'
import { tableEvento } from '../../utils/database/post/evento'
import { tableUser } from '../../utils/database/post/user'

const Home: NextPage = () => {

  return (
    <>
      <SimpleGrid
        gap={'20px'}
        w={'100%'}
        p={'1rem'}
        columns={{ base: 1, lg: 2 }}
        minH={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {/* <Button
          onClick={() => {
            tableUser()
          }}
        >
          Criar  tabela de user
        </Button> */}
        <Button
          onClick={() => {
            tableEvento()
          }}
        >
          Criar  tabela de evento
        </Button>
      </SimpleGrid>
    </>
  )
}

export default Home
