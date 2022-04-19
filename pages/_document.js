import { Html, Main, NextScript, Head } from 'next/document'

const seo =  {
    description: "Create your own bubble of silence with this unidirectional speaker.",
    title: "Whispr studio",
    type: "website",
    url: "https://whispr.studio.com/",
    previewImage: "/preview.png"
}

function Document() {
    return (
        <Html>
            <Head>
                <meta name="title" content={seo.title}/>
                <meta name="description" content={seo.description} />
                <meta property="og:type" content={seo.type} />
                <meta property="og:url" content={seo.url}/>
                <meta property="og:title" content={seo.title}/>
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content={seo.previewImage}/>
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={seo.url}/>
                <meta property="twitter:title" content={seo.title}/>
                <meta property="twitter:description" content={seo.description} />
                <meta property="twitter:image" content={seo.previewImage} />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

export default Document;