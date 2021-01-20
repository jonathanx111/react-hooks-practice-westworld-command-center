import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo.js"

function Details({ areas, isSelected, changeHostActive, value, setValue, onChangeAreaOption }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {isSelected ? <HostInfo areas={areas} isSelected={isSelected} changeHostActive={changeHostActive} value={value} setValue={setValue} onChangeAreaOption={onChangeAreaOption} /> : <Image size="medium" src={Images.westworldLogo} />}
    </Segment>
  );
}

export default Details;
