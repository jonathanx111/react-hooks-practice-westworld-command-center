import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from "./Headquarters";
import WestworldMap from "./WestworldMap";

function App() {
  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [isSelected, setIsSelected] = useState()
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(response => response.json())
      .then(hostObjects => {
        setHosts(hostObjects)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(response => response.json())
      .then(areaObjects => {
        setAreas(areaObjects)
      })
  }, [])

  function changeHostActive() {
    const afterChangeActiveArray = hosts.map(host => {
      return host.id === isSelected.id ? {...host, active: !host.active} : host
    })

    setHosts(afterChangeActiveArray)
    setIsSelected({...isSelected, active: !isSelected.active})
  }

  function onChangeAreaOption(newArea) {
    const afterAreaChangeArray = hosts.map(host => {
      if (host.id === isSelected.id) {
        return {...host, area: newArea}
      } else {
        return host
      }
    })
    setHosts(() => afterAreaChangeArray)
    // setIsSelected((isSelected) => ({...isSelected, area: newArea}))
    // setAreas([...areas])
    
  }

  return (
    <Segment id="app">
      <WestworldMap areas={areas} hosts={hosts} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
      <Headquarters areas={areas} hosts={hosts} isSelected={isSelected} setIsSelected={setIsSelected} changeHostActive={changeHostActive} value={value} setValue={setValue} onChangeAreaOption={onChangeAreaOption} />
    </Segment>
  );
}

export default App;
