import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Text,
  SimpleGrid,
  Flex,
  Heading,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.300"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{task.description}</Text>
            </CardBody>

            <Divider color="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  try {
    const res = await fetch("http://localhost:3000/tasks");
    return res.json();
  } catch (error) {
    return [];
  }
};
