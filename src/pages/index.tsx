import { Button, Card } from "@mui/material";
import { useRouter } from "next/router";
import CardHome from "../components/CardHome/cardHome.component";

import { firebase, auth } from "../services/firebase";

export default function Home() {
  const router = useRouter();

  async function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    router.push("/dashboard");
    console.log(result);
    return result;
  }
  return (
    <>
      <CardHome />
      <Button onClick={singInWithGoogle} variant="contained">
        Contained
      </Button>
    </>
  );
}
