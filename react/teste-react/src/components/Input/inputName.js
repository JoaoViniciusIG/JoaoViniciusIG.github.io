"use client";

import {
    useState
} from 'react';

export default function InputName() {
    const [name, setName] = useState("")
    const [exib, setExib] = useState("");

    const teste = (e) => {
        setExib(name)
    }

    return (
        <div>
            <input name="inputName" type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={teste}>Alterar nome</button>
            <p>Olá, {exib}</p>
        </div>
    );
}