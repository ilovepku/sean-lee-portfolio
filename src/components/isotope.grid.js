import React, { useState, useEffect, useRef } from "react"
import Isotope from "isotope-layout"

// Container for isotope grid
const ItemGrid = ({ children }) => {
  const ref = useRef(null)
  const [isotope, setIsotop] = useState(null)

  // set up isotope
  /* useEffect(() => {
    if (!isotope) {
      setIsotop(new Isotope(ref.current))
    } else {
      isotope.reloadItems()
    }
  }, [isotope]) */

  // update isotope layout
  /* useEffect(() => {
    if (isotope) {
      isotope.reloadItems()
      isotope.layout()
    }
  }) */

  return (
    <div ref={ref} className="filter-container project-cards row grid">
      {children}
    </div>
  )
}

export default ItemGrid
