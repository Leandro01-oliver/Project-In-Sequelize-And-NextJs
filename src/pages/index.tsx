import type { NextPage } from 'next'
import {
  Box,
  Button,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { tableEvento } from '../../utils/database/post/evento'
import { tableUser } from '../../utils/database/post/user'
import { putEventoId } from '../../utils/database/put/evento/id'
import { putUserId } from '../../utils/database/put/user/id'
import { deleteEventoId } from '../../utils/database/delete/evento/id'
import { deleteUserId } from '../../utils/database/delete/user/id'
import { getUserAll } from '../../utils/database/get/user/all'
import { getEventoAll } from '../../utils/database/get/evento/all'

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
        <Box
  w={{base:'100%',lg:'50%'}}
  h={'350px'}
  boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
  borderRadius={'10px'}
  p={'1rem'}
  mx={'auto'}
  >
   <Box>
    <Text
    fontSize={'30px'}
    fontWeight={'bold'}
    >
       CRUD de User
    </Text>
   </Box>
   <SimpleGrid
        gap={'20px'}
        w={'100%'}
        mt={'1rem'}
        columns={{ base: 1, lg: 2 }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Button
          onClick={() => {
            tableUser()
          }}
        >
          Criar user
        </Button>
        <Button
          onClick={() => {
            getUserAll()
          }}
        >
          Exibir user
        </Button>
        <Button
          onClick={() => {
            putUserId(2)
          }}
        >
          Editar user
        </Button>
        <Button
          onClick={() => {
            deleteUserId(1)
          }}
        >
          Excluir user
        </Button>
      </SimpleGrid>
  </Box>

        <Box
          w={{ base: '100%', lg: '50%' }}
          h={'350px'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          borderRadius={'10px'}
          p={'1rem'}
          mx={'auto'}
        >
          <Box>
            <Text
              fontSize={'30px'}
              fontWeight={'bold'}
            >
              CRUD de Evento
            </Text>
          </Box>
          <SimpleGrid
            gap={'20px'}
            w={'100%'}
            mt={'1rem'}
            columns={{ base: 1, lg: 2 }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Button
              onClick={() => {
                tableEvento()
              }}
            >
              Criar Evento
            </Button>
            <Button
          onClick={() => {
            getEventoAll()
          }}
        >
          Exibir user
        </Button>
            <Button
              onClick={() => {
                putEventoId(1)
              }}
            >
              Editar Evento
            </Button>
            <Button
              onClick={() => {
                deleteEventoId(1)
              }}
            >
              Excluir Evento
            </Button>
          </SimpleGrid>
        </Box>

      </SimpleGrid>


    </>
  )
}

export default Home
