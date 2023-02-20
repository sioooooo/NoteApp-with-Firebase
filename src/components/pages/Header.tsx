import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { Link, Outlet } from "react-router-dom";
import { DrawerMenu } from "../organisms/DrawerMenu";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        bg="yellow.200"
        color="gray.800"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        pos="fixed"
        top="0"
        left="0"
        w="100%"
        h="50px"
        zIndex="1"
      >
        <Flex align="center" ml={8} _hover={{ cursor: "pointer" }}>
          <Heading fontSize={{ base: "md", md: "lg" }}>
            {/* menu */}
            <IconButton
              aria-label="menu"
              icon={<HamburgerIcon boxSize={7} />}
              color="gray.800"
              bg="yellow.200"
              onClick={onOpen}
              mr="15px"
            />
            <Link to="">Note</Link>
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={10} _hover={{ color: "gray.200" }}>
            <Link to="/">ホーム</Link>
          </Box>
          <Box pr={10} _hover={{ color: "gray.200" }}>
            <Link to="login">ログイン</Link>
          </Box>
          <Box pr={4} _hover={{ color: "gray.200" }}>
            <Link to="note">ノート</Link>
          </Box>
        </Flex>
      </Flex>
      <Box pos="relative" top="50px">
        <Outlet />
      </Box>
      <DrawerMenu onClose={onClose} isOpen={isOpen} />
    </>
  );
});
