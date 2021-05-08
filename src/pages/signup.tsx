import { Flex, Heading, Input, Text, FormLabel } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

import { FormButton } from '../components/FormButton'

export default function Signup() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent={{ lg: 'space-between', base: 'center' }}
      direction={{ base: 'column-reverse' }}
      background="orange.500"
    >
      <Head>
        <title>SóMixeiro | Criar Conta</title>
        <meta name="description" content="Somixero" />
      </Head>

      <Flex
        direction="column"
        background="gray.900"
        p={{ base: 12, lg: 20 }}
        rounded={6}
      >
        <Flex direction="column">
          <Heading mb={6}>Criar conta</Heading>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            placeholder="Gil Vilarezz"
            variant="filled"
            mb={3}
            type="text"
            id="name"
            name="name"
          />
          <FormLabel htmlFor="email">Email</FormLabel>

          <Input
            placeholder="exemplo@gmail.com"
            variant="filled"
            mb={3}
            type="email"
            id="email"
            name="email"
          />
          <FormLabel htmlFor="password">Password</FormLabel>

          <Input
            placeholder="*****"
            variant="filled"
            mb={6}
            type="password"
            id="password"
            name="password"
          />

          <FormButton text="Criar" link="/dashboard" />

          <Flex
            alignItems="center"
            justifyContent="center"
            direction="column"
            pt={3}
          >
            <Link href="/">
              <Text
                fontWeight="semibold"
                cursor="pointer"
                color="white"
                fontSize={12}
              >
                Já tenho uma conta
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
