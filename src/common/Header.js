import React from 'react';
import {
  Flex,
  Box,
  Container,
  Text,
  ButtonGroup,
  Button,
  Icon,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Input,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { GoChevronDown } from 'react-icons/go';

const Header = () => {
  return (
    <Box>
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          height="80px"
        >
          <Box>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="27px"
              fontWeight="extrabold"
            >
              Snapify
            </Text>
          </Box>
          <Box
            flexGrow={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ButtonGroup
              overflow="hidden"
              maxW="670px"
              w="100%"
              isAttached
              variant="outline"
              border="1px solid #EAEEF2"
              borderRadius="300px"
              _hover={{ border: '1px solid #AEB4BE' }}
              _focusWithin={{ border: '1px solid #E94560' }}
            >
              <Button
                variant="outlined"
                // outline="1px solid #EAEEF2"
                height="full"
                mr="-px"
              >
                <Icon height="40px" as={FiSearch} fontSize="20px" />
              </Button>
              <Input
                placeholder="Search and hit enter..."
                outline="none"
                border="none"
                boxShadow="none"
                _focus={{
                  outline: 'none',
                  border: 'none',
                }}
              />
              <Menu>
                <MenuButton
                  minW="120px"
                  background="none"
                  as={Button}
                  rightIcon={<GoChevronDown />}
                >
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </ButtonGroup>
          </Box>
          <Box></Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
