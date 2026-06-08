import legacyHtml from "../docs/code.md?raw";

function App() {
  return (
    <iframe
      title="MP2 Animation Studio"
      srcDoc={legacyHtml}
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
