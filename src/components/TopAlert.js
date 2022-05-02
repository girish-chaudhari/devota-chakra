import { Box, Flex, Icon, Container } from '@chakra-ui/react';
import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { CountryDropDown, CountryLanguage } from '../helper';

const TopAlert = () => {
  return (
    <Box bg="#0f3460" color="white" height="40px">
      <Container height="100%">
        <Flex
          justifyContent="space-between"
          height="100%"
          alignItems="center"
          mx="1rem"
        >
          <Flex gap="20px">
            <Flex alignItems="center" gap="5px" fontSize="12px">
              <Icon
                as={BiPhone}
                height="16px"
                width="16px"
                aria-label="Make a call"
              />
              +91 9021 929562
            </Flex>
            <Flex alignItems="center" gap="5px" fontSize="12px">
              <Icon
                as={AiOutlineMail}
                height="16px"
                width="16px"
                aria-label="Message Us"
              />
              support@message.com
            </Flex>
          </Flex>
          <Flex gap="30px" alignItems="center" fontSize="12px">
            <Box>FAQ's</Box>
            <Box>Need Help?</Box>
            <Box>
              <CountryDropDown />
            </Box>
            <Box>
              <CountryLanguage />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default TopAlert;
