import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export const DrawerMenu: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Stack spacing={7}>
            <Box pr={10} _hover={{ color: "gray.200" }}>
              <Link to="">ログイン</Link>
            </Box>
            <Box pr={4} _hover={{ color: "gray.200" }}>
              <Link to="note">ノート</Link>
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});
