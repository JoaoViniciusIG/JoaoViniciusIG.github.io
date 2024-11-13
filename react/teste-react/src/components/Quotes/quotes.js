"use client"

import styles from "./quotes.module.css"
import {
    useState
} from 'react';

export default function Quotes() {
    const listQuotes = require("./quotes.json");
    const [currentQuote, setCurrentQuote] = useState(listQuotes[3].quote);
    const [currentPresident, setCurrentPresident] = useState(listQuotes[0].name);
    
    
    
    return (
        <div className={styles.containerQuote}>
            <h2 className={styles.quoteText}>"{currentQuote}"</h2>
            <p className={styles.quotePresident}>{currentPresident}</p>
        </div>
    )
}