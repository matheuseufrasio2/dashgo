import { Box, Flex, Heading, Button, Icon, Table, Thead, Th, Tr, Checkbox, Tbody, Td, Text, useBreakpointValue, HStack } from "@chakra-ui/react";
import { RiAddLine, RiCloseLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="24" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                {isWideVersion && (
                  <>
                    <Th>
                      Data de Cadastro
                  </Th>
                    <Th></Th>
                  </>
                )}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Matheus Eufrasio</Text>
                    <Text fontSize="sm" color="gray.300">matheus@matheus.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <>
                    <Td>04 de março de 2021</Td>
                    <Td>
                      <HStack spacing="4" display="flex" align="center" justify="center">
                        <Button
                          as="a"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          size="sm"
                          fontSize="sm"
                          colorScheme="blue"
                          p="0"
                        >
                          <Icon as={RiPencilLine} fontSize="16" />
                        </Button>
                        <Button
                          as="a"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          size="sm"
                          fontSize="sm"
                          colorScheme="red"
                          p="0"
                        >
                          <Icon as={RiCloseLine} fontSize="16" />
                        </Button>
                      </HStack>
                    </Td>
                  </>
                )}
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Matheus Eufrasio</Text>
                    <Text fontSize="sm" color="gray.300">matheus@matheus.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <>
                    <Td>04 de março de 2021</Td>
                    <Td>
                      <HStack spacing="4" display="flex" align="center" justify="center">
                        <Button
                          as="a"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          size="sm"
                          fontSize="sm"
                          colorScheme="blue"
                          p="0"
                        >
                          <Icon as={RiPencilLine} fontSize="16" />
                        </Button>
                        <Button
                          as="a"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          size="sm"
                          fontSize="sm"
                          colorScheme="red"
                          p="0"
                        >
                          <Icon as={RiCloseLine} fontSize="16" />
                        </Button>
                      </HStack>
                    </Td>
                  </>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}