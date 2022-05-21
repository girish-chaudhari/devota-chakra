import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { FiSearch, FiUser } from 'react-icons/fi';
import { GoChevronDown } from 'react-icons/go';
import DropdownMenu from '../components/DropdownMenu';

const Header = () => {
  const [searchCategory, setSearchCategory] = useState('All Categories');

  return (
    <Box pb="10px" boxShadow="rgb(43 52 69 / 10%) 0px 4px 16px">
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
            {/* search group input  */}
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
              <Popover placement="bottom-left">
                <Menu>
                  <MenuButton
                    minWidth="min-content"
                    background="none"
                    as={Button}
                    borderRight="none"
                    borderTop="none"
                    borderBottom="none"
                    rightIcon={<GoChevronDown />}
                  >
                    {searchCategory}
                  </MenuButton>
                  <MenuList>
                    <PopoverArrow
                      bg="white"
                      border="1px solid #bcbcbc"
                      boxShadow="rgb(0 0 0 / 16%) 0px 6px 12px"
                    />
                    <MenuItem
                      onClick={() => setSearchCategory('All Categories')}
                    >
                      All Categories
                    </MenuItem>
                    <MenuItem onClick={() => setSearchCategory('Toys')}>
                      Toys
                    </MenuItem>
                    <MenuItem onClick={() => setSearchCategory('Electronics')}>
                      Electronics
                    </MenuItem>
                    <MenuItem onClick={() => setSearchCategory('Camera')}>
                      Camera
                    </MenuItem>
                    <MenuItem
                      onClick={() => setSearchCategory('Home Appliances')}
                    >
                      Home Appliances
                    </MenuItem>
                    <MenuItem onClick={() => setSearchCategory('Home styles')}>
                      Home styles
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Popover>
            </ButtonGroup>
          </Box>
          <Box>
            <Flex gap="20px">
              <IconButton
                isRound
                aria-label="Search database"
                icon={<FiUser />}
              />
              <Box position="relative">
                <IconButton
                  isRound
                  aria-label="Search database"
                  icon={<FaShoppingBag />}
                />
                <Box
                  position="absolute"
                  top="-5px"
                  right="-5px"
                  padding="5px"
                  minW="15px"
                  height="15px"
                  fontSize="10px"
                  color="white"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="100px"
                  bg="rgb(233, 69, 96)"
                >
                  1
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box>
            <DropdownMenu />
          </Box>
          <Flex gap="32px">
            <Box
              fontSize="14px"
              cursor="pointer"
              _hover={{ color: 'rgb(233, 69, 96)' }}
            >
              Home
            </Box>
            <Box
              fontSize="14px"
              cursor="pointer"
              _hover={{ color: 'rgb(233, 69, 96)' }}
            >
              Pages
            </Box>
            <Box
              fontSize="14px"
              cursor="pointer"
              _hover={{ color: 'rgb(233, 69, 96)' }}
            >
              User Account
            </Box>
            <Box
              fontSize="14px"
              cursor="pointer"
              _hover={{ color: 'rgb(233, 69, 96)' }}
            >
              <Flex gap="10px">
                Vendor Account
                <Badge
                  fontSize="11px"
                  fontWeight={600}
                  padding="1px 5px"
                  background="rgb(255, 225, 230)"
                  color="rgb(233, 69, 96)"
                  borderRadius="6px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textTransform="normal"
                >
                  Pro
                </Badge>
              </Flex>
            </Box>
            <Box
              fontSize="14px"
              cursor="pointer"
              _hover={{ color: 'rgb(233, 69, 96)' }}
            >
              <Flex gap="10px">
                Track My Orders
                <Badge
                  fontSize="11px"
                  fontWeight={600}
                  padding="1px 5px"
                  background="rgb(255, 225, 230)"
                  color="rgb(233, 69, 96)"
                  borderRadius="6px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textTransform="normal"
                >
                  Pro
                </Badge>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
