import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./ProductList.css";

function ProductList({ productos }) {

    const [useList, setList] = useState([]);

    const [selectedKey, setSelectedKey] = useState("10");


    useEffect(() => {
      const mls = Object.keys(productos);
      console.log(productos)
      if (mls.length > 0) {
        const firstKey = mls[0];
        setSelectedKey(firstKey);
        setList(productos[firstKey]);
      }
    }, [productos]);

    const onChange = (mls) =>{
        setList(productos[mls])
        setSelectedKey(mls)
    }

    return (
      <div className="product-list">
      <label htmlFor="marca-select">Seleccioná los ML:</label>
        <select
          id="marca-select"
          value={selectedKey}
          onChange={(e) => onChange(e.target.value)}
        >
          {Object.entries(productos).map(([ml]) => (
            <option key={ml} value={ml} select="true">{ml}</option>
          ))}
        </select>
        <div className="grid">
          {useList.map((perfume, i) => {
            if(perfume.promPrice != 0){
                return<Product key={i} perfume={perfume}/>
            }
          })}
        </div>
      </div>
    );
}

export default ProductList;

