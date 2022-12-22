import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caramel&family=Crimson+Text&family=Nunito+Sans:wght@200&family=Poppins:ital,wght@1,600&display=swap"
                    rel="stylesheet"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
