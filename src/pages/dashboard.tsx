import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../services/firebase";

export default function Dashboard() {
  const router = useRouter();

  async function logOut() {
    await signOut(auth);
    router.push("/");
  }
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={logOut} variant="contained">
        Sair
      </Button>
    </>
  );
}
