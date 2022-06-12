const express = require('express');
const cors = require('cors');
const rutasEquipo = require('./routes/equipo');
const rutasMarca = require('./routes/marca');
const rutasUsuario = require('./routes/usuario');
const rutasInventario = require('./routes/inventario');

const port = 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"))
app.listen(port, () => console.log(`server running at ${port}`));

app.get('/', (req, res) => {
    res.json({ message: 'api working' });
});

app.use('/equipo', rutasEquipo);
app.use('/marca', rutasMarca);
app.use('/usuario', rutasUsuario);
app.use('/inventario', rutasInventario);
