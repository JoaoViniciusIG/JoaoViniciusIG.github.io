import Link from 'next/link'
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav>
                <ul className={styles.ulHeader}>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}