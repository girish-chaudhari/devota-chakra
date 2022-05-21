import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';
import { BsLaptop, BsMusicNoteBeamed } from 'react-icons/bs';
import { CgMenuGridR } from 'react-icons/cg';
import { FaChevronRight, FaDog, FaGifts } from 'react-icons/fa';
import { FcAutomotive } from 'react-icons/fc';
import {
  GiFairy,
  GiLargeDress,
  GiPineTree,
  GiStumpRegrowth,
} from 'react-icons/gi';
import { GoChevronDown } from 'react-icons/go';
import { MdToys } from 'react-icons/md';
import { RiMotorbikeFill } from 'react-icons/ri';

const DropdownMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<CgMenuGridR />}
        rightIcon={<GoChevronDown />}
        _focus={{
          boxShadow:
            'rgb(0 0 0 / 6%) 0px 3px 3px -2px, rgb(0 0 0 / 4%) 0px 3px 4px 0px, rgb(0 0 0 / 4%) 0px 1px 8px 0px',
        }}
        variant="solid"
      >
        Categories
      </MenuButton>
      <MenuList>
        <Popover placement="right-start" trigger="hover">
          <PopoverTrigger>
            <MenuItem
              padding="8px 16px"
              _hover={{
                color: 'rgb(233, 69, 96)',
              }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow={1}
              >
                <Flex gap="15px" alignItems="center">
                  <Icon as={GiLargeDress} />
                  <Box>Fashion</Box>
                </Flex>
                <Icon as={FaChevronRight} />
              </Flex>
            </MenuItem>
          </PopoverTrigger>
          <PopoverContent
            boxShadow="none"
            _focus={{
              boxShadow: 'none',
            }}
          >
            <PopoverBody>1</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover
          returnFocusOnClose={false}
          placement="right-start"
          closeOnBlur={false}
          trigger="hover"
        >
          <PopoverTrigger>
            <MenuItem
              padding="8px 16px"
              _hover={{
                color: 'rgb(233, 69, 96)',
              }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow={1}
              >
                <Flex gap="15px" alignItems="center">
                  <Icon as={BsLaptop} />
                  <Box>Electronics</Box>
                </Flex>
                <Icon as={FaChevronRight} />
              </Flex>
            </MenuItem>
          </PopoverTrigger>
          <PopoverContent
            boxShadow="none"
            _focus={{
              boxShadow: 'none',
            }}
          >
            <PopoverBody>2</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover
          returnFocusOnClose={false}
          placement="right-start"
          closeOnBlur={false}
          trigger="hover"
        >
          <PopoverTrigger>
            <MenuItem
              padding="8px 16px"
              _hover={{
                color: 'rgb(233, 69, 96)',
              }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow={1}
              >
                <Flex gap="15px" alignItems="center">
                  <Icon as={RiMotorbikeFill} />
                  <Box>Bikes</Box>
                </Flex>
                <Icon as={FaChevronRight} />
              </Flex>
            </MenuItem>
          </PopoverTrigger>
          <PopoverContent
            boxShadow="none"
            _focus={{
              boxShadow: 'none',
            }}
          >
            <PopoverBody>3</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover
          returnFocusOnClose={false}
          placement="right-start"
          closeOnBlur={false}
          trigger="hover"
        >
          <PopoverTrigger>
            <MenuItem
              padding="8px 16px"
              _hover={{
                color: 'rgb(233, 69, 96)',
              }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow={1}
              >
                <Flex gap="15px" alignItems="center">
                  <Icon as={GiPineTree} />
                  <Box>Home & Garden</Box>
                </Flex>
                <Icon as={FaChevronRight} />
              </Flex>
            </MenuItem>
          </PopoverTrigger>
          <PopoverContent
            boxShadow="none"
            _focus={{
              boxShadow: 'none',
            }}
          >
            <PopoverBody>4</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover
          returnFocusOnClose={false}
          placement="right-start"
          closeOnBlur={false}
          trigger="hover"
        >
          <PopoverTrigger>
            <MenuItem
              padding="8px 16px"
              _hover={{
                color: 'rgb(233, 69, 96)',
              }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow={1}
              >
                <Flex gap="15px" alignItems="center">
                  <Icon as={FaGifts} />
                  <Box>Gifts</Box>
                </Flex>
                <Icon as={FaChevronRight} />
              </Flex>
            </MenuItem>
          </PopoverTrigger>
          <PopoverContent
            boxShadow="none"
            _focus={{
              boxShadow: 'none',
            }}
          >
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <MenuItem>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Flex gap="15px" alignItems="center">
              <Icon as={BsMusicNoteBeamed} />
              <Box>Music</Box>
            </Flex>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Flex gap="15px" alignItems="center">
              <Icon as={GiFairy} />
              <Box>Health & Beauty</Box>
            </Flex>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Flex gap="15px" alignItems="center">
              <Icon as={FaDog} />
              <Box>Pets</Box>
            </Flex>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Flex gap="15px" alignItems="center">
              <Icon as={MdToys} />
              <Box>Baby Toys</Box>
            </Flex>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Flex gap="15px" alignItems="center">
              <Icon as={GiStumpRegrowth} />
              <Box>Groceries</Box>
            </Flex>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Flex gap="15px" alignItems="center">
              <Icon as={FcAutomotive} />
              <Box>Automotive</Box>
            </Flex>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
