import React from 'react'
import Home from "@/pages/home";
import Head from "next/head";

export default function index () {
    return <>
        <Head>
            <title>Search My Expert - Home</title>
            <link rel="icon" href="/images/favicon.ico"/>
        </Head>
        <div className="main">
            <Home/>
        </div>
    </>
}
