import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Box,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box w="480px">
      <Form method="post" action="/create">
        <FormControl mb="8">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a description task name</FormHelperText>
        </FormControl>
        <FormControl mb="8">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the tasks..."
            name="description"
          />
          <FormHelperText>Enter a description task name</FormHelperText>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel ml="10px" mb="0">
            Make this a priority task
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};
