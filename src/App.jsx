import Header from "./components/Main_Header"
import "./App.css";
import BodyComponent from "./components/MainBody";
import { useEffect, useState } from "react";
import useSetDetails from "./customHooks/useSetDetails";
const App = () => {

  const [curGroup, setCurGroup] = useState("");
  const [curOrder, setCurOrder] = useState("");

  const [data, setData] = useState(null);

  useSetDetails({ setCurGroup, setCurOrder });

  useEffect(() => {
    getData();
  }, []);




  const getData = async () => {
    const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const d = await res.json();
  

    setData(d);
  }


  return (
    <>
      <Header curGroup={curGroup} curOrder={curOrder} setCurGroup={setCurGroup} setCurOrder={setCurOrder} />
      <BodyComponent curGroup={curGroup} curOrder={curOrder} data={data}/>
    </>
  )
}




export default App
