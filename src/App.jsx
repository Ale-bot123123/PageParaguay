import './App.css'
import { useEffect, useState } from "react";
import ProductList from './ProductsList/ProductList'
import Searcher from './Searcher/Searcher';

function App() {
  const [productos, setProductos] = useState({});
  const [selectedKey, setSelectedKey] = useState(""); // 🔑 clave seleccionada

  useEffect(() => {
    fetch("/perfumes.json")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        const firstKey = Object.keys(data)[0]; // seleccionar la primera por defecto
        setSelectedKey(firstKey);
      })
      .catch((err) => console.error("Error al cargar JSON:", err));
  }, []);

  return (
    <>
      <Searcher
        keys={Object.keys(productos)}
        selectedKey={selectedKey}
        onChange={setSelectedKey}
      />
      <ProductList productos={productos[selectedKey] || {}} />
    </>
  );
}

export default App;
