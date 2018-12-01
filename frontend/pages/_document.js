import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import stylesheet from '../src/styles/style.css'


export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en-US">
        <Head>
            <title>
                Joanna Thompson | Professional Organizing | Omaha, NE
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="Description" content="In-home and remote professional organizing. I will help you understand your own organizing weaknesses and challenges, and together we will create the stress-free, organized environment you want." />
            <meta property="og:site_name" content="Joanna Thompson" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content="Joanna Thompson | Professional Organizing" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://wp.joanna-thompson.com/wp-content/uploads/2018/10/boxes.jpg" />
            <meta name="google-site-verification" content="_pGpTGZEnuUGx1YU27atkiyzldRegtPFLsIdbBF7Eb0" />
            <meta name="p:domain_verify" content="1208501e82b80ef57111d9ad0964fa4a" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
            {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
