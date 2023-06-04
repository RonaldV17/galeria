import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Badge from 'react-bootstrap/Badge';

function App() {
return (
<div>
<Header title="Galeria de imagenes con react" />
<div class="contenido">
<Card url="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo_tarjeta="Perro" descripcion="Perro Pugg"/>
<Card url="https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo_tarjeta="Oso Panda" descripcion="Hermoso animal proveniente de Japon"/>
<Card url="https://images.pexels.com/photos/7501731/pexels-photo-7501731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" titulo_tarjeta="Alpacas" descripcion="Imagenes desde el lago mas alto del mundo Lago Chungará"/>
</div>
<div class="fin_pagina">
<Footer pie="Todos los derechos reservados"/>
<h4>
        Quieres ver mas imágenes<Badge bg="secondary">Pronto</Badge>
      </h4>
</div>

</div>
);
}
export default App;
