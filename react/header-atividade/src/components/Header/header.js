"use client"

import styles from "./header.module.css"

import {
    useState,
    useEffect
} from 'react';

import { motion } from "framer-motion";

import Link from 'next/link'
import Image from "next/image";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        document.getElementById("nav").style.animation = "openNav .3s ease-in-out forwards";
        
        setIsOpen(!isOpen)
    }
    
    return (
        <header className={styles.containerHeader}>
            <Image
                src="/images/Logo-JV-Branco.svg"
                width={50}
                height={50}
                alt="Logo JV"
                objectFit="cover"
                style={styles.headerLogo}
                objectPosition="center" />

            <nav>
                <motion.div
                    style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "blue",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <a className={styles.buttonToggleNav} onClick={toggleNav}>
                    <Image width={40} height={40} src={(isOpen) ? "x-lg.svg" : "list.svg"} alt="a"/>
                </a>

                <ul className={styles.listNav} id="nav">
                    <li>
                        <Link href="/" style={{textDecoration: "none"}}>
                            <p>Início</p>
                            <div className={styles.optionSpan}></div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre" style={{textDecoration: "none"}}>
                            <p>Sobre</p>
                            <div className={styles.optionSpan}></div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contatos" style={{textDecoration: "none"}}>
                            <p>Contato</p>
                            <div className={styles.optionSpan}></div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}