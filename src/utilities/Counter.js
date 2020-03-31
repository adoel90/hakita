import React, { Component, useState, useEffect } from "react";

export const Counter = () => {

    const [ count, setCount ] = useState(0);
    return (
        <div>

            <h3>Kamu telah meng-klik saya {count} kali</h3>
            <button type='button' onClick={() => setCount(count + 1)}>Button</button>
        </div>
    )
};