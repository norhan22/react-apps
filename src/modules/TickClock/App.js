
function app() {
  return (
    <div>
          <h1>Ticking clock</h1>
          <h3>It is {new Date().toLocaleTimeString()}.</h3>

    </div>
  );
}
setInterval(app, 1000);

export default app;
