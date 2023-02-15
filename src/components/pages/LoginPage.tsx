import { Flex, Box, Input, Stack, Button } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, provider } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoginButton } from "../atoms/LoginButton";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

export const LoginPage: FC = memo(() => {
  const navigate = useNavigate();
  const [userAuth] = useAuthState(auth);

  const usersCollection = collection(db, "users");

  const signIn = async () => {
    // 絶対にログインしているuserをつくる
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const docRef = doc(usersCollection, user.uid);
      const docSnap = await getDoc(docRef);
      // console.log(docSnap);

      if (!docSnap.exists()) {
        console.log("新しいアカウントを作ります");
        await setDoc(doc(usersCollection, user.uid), {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          notes: [],
        });
      }
      navigate("/note");
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center" height="90vh">
      <Box bg="white" w="sm" p={8} borderRadius="md" shadow="md">
        <Stack spacing={5} py={10} px={10}>
          {userAuth ? (
            <LoginButton onClick={() => signOut(auth)}>ログアウト</LoginButton>
          ) : (
            <LoginButton onClick={signIn}>Googleでログイン</LoginButton>
          )}
        </Stack>
      </Box>
    </Flex>
  );
});
