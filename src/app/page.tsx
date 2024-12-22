import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image src={"/hero.png"} alt="Wateja hero" width={200} height={200} />
      <h1>Bienvenue dans nextjs</h1>

      <Link href="/contacts" className="btn-link">
        Visiter notre application
      </Link>
    </div>
  );
}
