import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList";

function Area({ hosts, area, isSelected, setIsSelected, setValue}) {
  const { id, name, limit, auth_req } = area
  
  function cleanUpName(name) {
    let cleanedName = name
    
    if (name.split("").includes("_") ) {
      let nameArray = name.split("_")
      nameArray[0]=nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1)
      nameArray[1]=nameArray[1].charAt(0).toUpperCase() + nameArray[1].slice(1)
      cleanedName = nameArray.join(" ")
    } else {
      cleanedName = name.charAt(0).toUpperCase() + name.slice(1)
    }
    return cleanedName
  }
  
  
  return (
    <div
      className="area"
      id={
        name
      }
    >
      <h3 className="labels">
        {cleanUpName(name)}
      </h3>
      <HostList hosts={hosts} fromArea={area} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
    </div>
  );
}

// Area.propTypes = {
//   hosts: function (props) {
//     console.log(props)
//     if (props.hosts.length > props.area.limit) {
//       throw Error(
//         `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
//       );
//     }
//   },
// };

export default Area;
