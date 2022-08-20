import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  // <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
  return (
      <Component {...pageProps} />
  );
}
