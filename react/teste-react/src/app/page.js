import styles from "./page.module.css";
import Header from "@/components/Header/header";
import Image from "next/image";
import Quotes from "@/components/Quotes/quotes";

export default function Home() {
  return (
    <div className={styles.containerMaster}>
      <Header />
      <Image 
        src="/images/usbackground.jpg"
        alt="US Background"
        className={styles.imageBackground}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1 className={styles.titlePage}>Página inicial</h1>
      <Image className={styles.imageContent} src="/images/usarmy.jpg" alt="I want you to us army" width={500} height={700}/>

      <Quotes />
    </div>
  );
}
