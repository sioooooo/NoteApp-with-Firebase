import { Flex, Box, Input, Button, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../atoms/LoginButton";

export const LoginPage: FC = memo(() => {
  const navigate = useNavigate();
  const onClickNote = () => {
    navigate("/note");
  };
  return (
    <Flex alignItems="center" justifyContent="center" height="90vh">
      <Box bg="white" w="sm" p={8} borderRadius="md" shadow="md">
        <Stack spacing={5} py={10} px={10}>
          <Input placeholder="ログイン" />
          <LoginButton onClick={onClickNote}>ログイン</LoginButton>
        </Stack>
      </Box>
    </Flex>
  );
});
