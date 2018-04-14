import Express from "express";
const app = new Express();
app.use("/public", Express.static("public"));

app.get("/", (req, res, err) => {
  return res.send(`<html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div id="app">
      <h1>Hola con nodemon</h1>
      </div>
    <script src="public/js/app.min.js">npm</script>
    </body>
    </html>`);
});

app.listen(3000, () => {
  console.log("la app esta corriendo en el puerto 3000");
});
