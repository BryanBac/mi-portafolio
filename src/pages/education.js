import Head from "next/head";
import LoginBar from "@/pages/login_bar";
import Menu from "@/pages/menu";
import Scholars from "@/components/scholar-cards";

export default function Education() {
  return (
    <>
      <Head>
        <title>Education</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <LoginBar></LoginBar>
        <Menu></Menu>
        <Scholars></Scholars>
      </div>
    </>
  );
}