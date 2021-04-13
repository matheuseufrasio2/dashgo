import Head from 'next/head';
import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;
  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>Início | dashgo</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
              <Input 
                error={errors.email}
                {...register('email')}
                name="email"
                type="email"
                label="E-mail"
              />
              <Input
                error={errors.password}
                name="password"
                type="password"
                label="Senha"
              />
          </Stack>

          <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink" mt="6" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
