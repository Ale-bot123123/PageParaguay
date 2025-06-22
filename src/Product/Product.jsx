import "./Product.css"
import {useState} from "react"

function Product ({perfume}){
   const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card">
      <img src={perfume.img || "/placeholder.svg"} alt={perfume.name} className="card-image" />

      <div className="card-content">
        <a className="perfume-name" href={perfume.url} target="_blank">{perfume.name}</a>

        <div className="price-section">
          <span className="average-price">${perfume.promPrice.toFixed(2)}</span>
          <span className="price-label">Precio promedio</span>
        </div>

        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          Ver precios y promociones
          <svg className={`chevron ${isOpen ? "rotated" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="collapsible-content">
            {/* Mejores precios */}
            <div className="section">
              <h4 className="section-title">Mejores precios:</h4>
              {perfume.mejores.map((item, index) => (
                <div key={index} className="price-item">
                  <span className="store-name">{item.name}</span>
                  <div>
                    <span className="price">${item.precio.toFixed(2)}</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="external-link">
                      ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Promociones */}
            {perfume.promoArr.length > 0 && (
              <div className="section">
                <h4 className="section-title">Promociones especiales:</h4>
                {perfume.promoArr.map((promo, index) => (
                  <div key={index} className="promo-item">
                    <div className="promo-header">
                      <span className="promo-name">{promo.name}</span>
                      <span className="promo-store">{promo.tienda}</span>
                    </div>
                    <div className="promo-price">
                      ${promo.precio.toFixed(2)}
                      <a href={promo.url} target="_blank" rel="noopener noreferrer" className="external-link">
                        ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Product