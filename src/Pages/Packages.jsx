import React, { useContext } from 'react'
import { PackagesContext } from '../contextApi/Package'


function Packages() {
  const [Packages] = useContext(PackagesContext)
  return (
    <div>{Packages.map((pkg)=>(
      <li>{pkg.name}</li>
    ))}</div>
  )
}

export default Packages