import React from 'react'
import CardProduct from '../components/CardProduct'
import Sliders from '../components/Sliders'
import { products } from "../../db.json";
import {clearState} from "../app/stores/slices/authSlice"
import { useAppDispatch } from '../app/stores/hooks';
import { useNavigate } from 'react-router-dom';
type Props = {}

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = "NXB KIM DONG"

  }, []);
  
  return (
    <div>
      <Sliders />
      <CardProduct data={products} />
      <button onClick={() =>{
         dispatch(clearState)
      }}>LOgout</button>
    </div>
  )
}

export default Home