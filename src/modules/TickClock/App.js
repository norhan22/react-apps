import '../../assets/styles/App.css';
function app() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Ticking clock</h1>
          <h3>It is {new Date().toLocaleTimeString()}.</h3>
        </header>
    </div>
  );
}
setInterval(app, 1000);

export default app;
