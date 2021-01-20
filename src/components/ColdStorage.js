import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({ hosts, isSelected, setIsSelected, setValue }) {

  
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hosts={hosts} fromArea={false} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
