import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  Skeleton,
} from '@chakra-ui/react';
import React from 'react';
import { GoChevronDown } from 'react-icons/go';

const flagUrl =
  'https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=612x612&w=0&h=n8mmywhzMzcrRI4I50uKYEFVeS4wDfpOGQGEaCK6YPw=';

export const CountryDropDown = () => {
  return (
    <Box>
      <Popover bg="blue.800">
        <Menu>
          <MenuButton>
            <Flex gap="5px" fontSize="14px" alignItems="center">
              <Image
                height="15px"
                objectFit="contain"
                width="25px"
                src={flagUrl}
                alt="india"
                draggable="false"
                fallback={<Skeleton />}
              />
              India <GoChevronDown />
            </Flex>
          </MenuButton>
          <MenuList minWidth="200px" color="black" w="200px">
            <PopoverArrow bg="white" />
            {[1, 2, 3, 4, 5].map((item, i) => (
              <MenuItem
                p="8px 16px"
                key={i}
                _hover={{ color: '#e94560', bg: 'gray.50' }}
                fontSize="12px"
                fontWeight="600"
              >
                <Flex gap="5px" alignItems="center">
                  <Image
                    height="15px"
                    objectFit="contain"
                    width="25px"
                    src={flagUrl}
                    alt="india"
                    draggable="false"
                    fallback={<Skeleton />}
                  />
                  En
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Popover>
    </Box>
  );
};

export const CountryLanguage = () => {
  return (
    <Box>
      <Popover bg="blue.800">
        <Menu>
          <MenuButton>
            <Flex gap="5px" fontSize="14px" alignItems="center">
              <Image
                height="15px"
                objectFit="contain"
                width="25px"
                src={flagUrl}
                alt="india"
                draggable="false"
                fallback={<Skeleton />}
              />
              India <GoChevronDown />
            </Flex>
          </MenuButton>
          <MenuList minWidth="200px" color="black" w="200px">
            <PopoverArrow bg="white" />
            {[1, 2, 3, 4, 5].map((item, i) => (
              <MenuItem
                p="8px 16px"
                key={i}
                _hover={{ color: '#e94560', bg: 'gray.50' }}
                fontSize="12px"
                fontWeight="600"
              >
                <Flex gap="5px" alignItems="center">
                  <Image
                    height="15px"
                    objectFit="contain"
                    width="25px"
                    src={flagUrl}
                    alt="india"
                    draggable="false"
                    fallback={<Skeleton />}
                  />
                  INR
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Popover>
    </Box>
  );
};
