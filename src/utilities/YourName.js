import React, { Component, useState, useEffect } from "react";

export const YourName = () => {
    
    const [form, setName ] = useState({
        name:''
    })

    const updateField = (e) => {
        e.preventDefault();
        setName({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <h1>My Name is : {form.name}</h1>
            <input type='text' name="name" value={form.name} onChange={updateField} />
        </div>
    )
};