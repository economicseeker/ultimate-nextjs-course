import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="h1-bold font-inter">Welcome to the world of Next.js</h1>
    </>
  );
};

export default Home;
