import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [importance, setImportance] = useState(5);
  const [quickness, setQuickness] = useState(5);

  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodo = { task, importance, quickness };
    setTodos([...todos, newTodo]);
    setTask("");
    setImportance(5);
    setQuickness(5);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const sortedTodos = todos.sort((a, b) => b.importance + b.quickness - (a.importance + a.quickness));

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo List</Text>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <HStack width="100%">
          <Text>Importance:</Text>
          <Slider value={importance} onChange={(val) => setImportance(val)} min={1} max={10} flex="1">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text>{importance}</Text>
        </HStack>
        <HStack width="100%">
          <Text>Quickness:</Text>
          <Slider value={quickness} onChange={(val) => setQuickness(val)} min={1} max={10} flex="1">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text>{quickness}</Text>
        </HStack>
        <VStack spacing={4} width="100%">
          {sortedTodos.map((todo, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={4} borderWidth="1px" borderRadius="md">
              <Box>
                <Text>{todo.task}</Text>
                <Text fontSize="sm">
                  Importance: {todo.importance}, Quickness: {todo.quickness}
                </Text>
              </Box>
              <IconButton aria-label="Delete" icon={<FaTrash />} onClick={() => deleteTodo(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
