import { Button } from "@chakra-ui/react";
import { memo, FC } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const LoginButton: FC<Props> = memo((props) => {
  const { children, onClick } = props;
  return <Button onClick={onClick}> {children}</Button>;
});
