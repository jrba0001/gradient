import Express from "express";
const app = new Express();

app.get("/", (req, res, err) => {
  return res.send("hola mundo cruel");
});

app.listen(3000, () => {
  console.log("la app esta corriendo en el puerto 3000");
});
