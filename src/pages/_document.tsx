import { Head, Html, Main, NextScript } from 'next/document'
import React from "react";

export default function Document () {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
                <meta name="description" content="Search My Expert"/>
                <link rel="icon" href="/images/favicon.ico"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
