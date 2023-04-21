import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
        </Head>
        <header>
            <nav>
                <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
                <Link href="/users">Users List</Link> |{' '}
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/api/users">Users API</a>
            </nav>
        </header>
        {children}
        <footer>
            <hr/>
            <span>I am here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout
