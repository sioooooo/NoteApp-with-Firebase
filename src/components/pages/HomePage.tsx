import { memo, FC } from "react";
import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";

export const HomePage: FC = memo(() => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexFlow="column"
    >
      <Text>このアプリは、Googleでログインできる。ノートアプリです。</Text>
      <Text py={4}>使い方</Text>
      <OrderedList>
        <ListItem>ログインページに移動</ListItem>
        <ListItem>中央の「Googleでログイン」をクリック</ListItem>
        <ListItem>ポップアップしたウィンドウからログイン</ListItem>
        <ListItem>
          ノートページに移動（ログインに成功すると自動で移動します。）
        </ListItem>
        <ListItem>画面の＋（プラス）ボタンから新しいノートを作成</ListItem>
      </OrderedList>
    </Box>
  );
});
