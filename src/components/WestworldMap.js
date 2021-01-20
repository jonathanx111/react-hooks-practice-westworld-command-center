import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, hosts, isSelected, setIsSelected, setValue }) {
  const areaComponentArray = areas.map(area => {
    return <Area key={area.id} area={area} hosts={hosts} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
  })
  
  return <Segment id="map">
  {areaComponentArray}
  </Segment>;
}

export default WestworldMap;
