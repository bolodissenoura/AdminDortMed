import { Button } from "@mui/material";
import { useRouter } from "next/router";

import { firebase, auth } from "../services/firebase";

export default function Home() {
  const router = useRouter();

  async function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    router.push("/dashboard");
    return result;
  }
  return (
    <>
      <Button onClick={singInWithGoogle} variant="contained">
        Contained
      </Button>
    </>
  );
}
