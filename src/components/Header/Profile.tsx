import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Eufrasio</Text>
          <Text color="gray.300" fontSize="small">
            matheus@matheus.com
        </Text>
        </Box>
      )}
      <Avatar size="md" name="Matheus Eufrasio" src="https://github.com/matheuseufrasio2.png" />
    </Flex>
  )
}