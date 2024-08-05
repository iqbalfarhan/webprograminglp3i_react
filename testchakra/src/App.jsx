import {
  Container,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  Button,
  Grid,
  GridItem,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const toast = useToast();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://iqmn.my.id/api/post')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <Container mx={'auto'}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {posts?.map((post, index) => (
            <GridItem key={index}>
              <Card maxW='md'>
                <CardHeader>
                  <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                      <Avatar name='Segun Adebayo' src={post.user.photo} />

                      <Box>
                        <Heading size='sm'>{post.user.name}</Heading>
                        <Text>{post.user.email}</Text>
                      </Box>
                    </Flex>
                    <IconButton
                      variant='ghost'
                      colorScheme='gray'
                      aria-label='See menu'
                    />
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development
                    with the speed of design. I wanted the developer to be just
                    as excited as the designer to create a screen.
                  </Text>
                </CardBody>
                <Image
                  objectFit='cover'
                  src={'https://iqmn.my.id/storage/' + post.photo}
                  alt='Chakra UI'
                />

                <CardFooter
                  justify='space-between'
                  flexWrap='wrap'
                  sx={{
                    '& > button': {
                      minW: '136px',
                    },
                  }}
                >
                  <Button
                    onClick={() =>
                      toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Show Toast
                  </Button>
                  <Button flex='1' variant='ghost'>
                    Comment
                  </Button>
                  <Button flex='1' variant='ghost'>
                    Share
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default App;
