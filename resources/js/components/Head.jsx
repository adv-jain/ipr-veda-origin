import React from "react";
import { Helmet } from "react-helmet-async";

const Head = ({ pageTitle = "IPR Veda" }) => {
    return (
        <Helmet>
            <html
                lang="en"
                data-bs-theme="light"
                style={{
                    "--bs-primary": "#1086ff",
                    "--bs-primary-rgb": "16,134,255",
                }}
            />

            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />

            <title>{pageTitle}</title>

            <link
                rel="shortcut icon"
                href="/assets/img/favicon4.png"
                type="image/x-icon"
            />

            <link
                rel="stylesheet"
                href="/assets/css/main.css?v=1"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
                rel="stylesheet"
            />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9cQ2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />

            <script
                async
                data-id="4894436432"
                id="chatling-embed-script"
                type="text/javascript"
                src="https://chatling.ai/js/embed.js"
            />
        </Helmet>
    );
};

export default Head;