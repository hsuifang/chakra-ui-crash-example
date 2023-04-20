import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Flex,
  Box,
  Button,
  Heading,
  Spacer,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px">
      <Heading as="h1"> Haven Ticket </Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="Fang" bg="purple.400" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="#fff">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
