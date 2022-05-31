import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html className="tabular-nums antialiased">
        <Head />
        <body className="min-h-screen bg-white text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
