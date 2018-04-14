import Express from "express";
const app = new Express();

app.get("/", (req, res, err) => {
  return res.send(`<html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div id="app">
      <h1>Hola</h1>
      </div>

    </body>
    </html>`);
});

app.listen(3000, () => {
  console.log("la app esta corriendo en el puerto 3000");
});
