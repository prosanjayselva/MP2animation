import legacyHtml from "../docs/code.md?raw";

const base = import.meta.env.BASE_URL;

function App() {
  const html = legacyHtml
    .replace(/="\//g, `="${base}`)
    .replace(/='\//g, `='${base}`)
    .replace(/url\(\//g, `url(${base}`);

  return (
    <iframe
      title="MP2 Animation Studio"
      srcDoc={html}
      style={{
        width: "100%",
        height: "100vh",
        border: "0",
        display: "block"
      }}
    />
  );
}

export default App;
