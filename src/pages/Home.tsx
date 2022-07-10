import React from 'react'
import CardProduct from '../components/CardProduct'
import Sliders from '../components/Sliders'
import { products } from "../../db.json"
type Props = {}

const Home = (props: Props) => {
  React.useEffect(() => {
    document.title = "NXB KIM DONG"

  }, [])
  return (
    <div>
      <Sliders />
      <CardProduct data={products} />
    </div>
  )
}

export default Home