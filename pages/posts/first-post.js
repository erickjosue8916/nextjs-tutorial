import Image from "next/image";
import Header from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

const ProfileImage = () =>(
  <Image
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Erick Saravia"
  />
)

export default function FirstPost () {
  return <Layout>
    <Header>
      <title>First Post</title>
    </Header>
    <h1>Hello World</h1>
    <br/>
    <ProfileImage />
    <br/>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </Layout>
}
