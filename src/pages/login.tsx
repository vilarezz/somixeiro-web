import Link from 'next/link'
import Head from 'next/head'
import { Flex, Heading, Input, Text } from '@chakra-ui/react'

import { FormButton } from '../components/FormButton'

export default function Login() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent={{ lg: 'space-between', base: 'center' }}
      direction={{ base: 'column-reverse' }}
      background="orange.500"
    >
      <Head>
        <title>Entrar</title>
        <meta name="description" content="Somixero" />
      </Head>

      <Flex
        direction="column"
        background="gray.900"
        p={{ base: 12, lg: 20 }}
        rounded={6}
      >
        <Flex direction="column">
          <Heading mb={6}>Log In</Heading>
          <Input
            placeholder="exemplo@gmail.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input placeholder="*****" variant="filled" mb={6} type="password" />
          <FormButton text="Entrar" link="/dashboard" />

          <Flex
            alignItems="center"
            justifyContent="center"
            direction="column"
            pt={3}
          >
            <Link href="/signup">
              <Text
                fontWeight="semibold"
                cursor="pointer"
                color="white"
                fontSize={12}
              >
                Não tenho uma conta
              </Text>
            </Link>

            <Link href="/">
              <Text
                fontWeight="semibold"
                cursor="pointer"
                color="white"
                fontSize={12}
              >
                Esqueci a palavra-passe
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex m={4} justifyContent="center" alignItems="center">
        <Heading>SÓMIXEIRO</Heading>
      </Flex>
    </Flex>
  )
}
