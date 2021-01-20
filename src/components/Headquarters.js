import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({ areas, hosts, isSelected, setIsSelected, changeHostActive, value, setValue, onChangeAreaOption }) {

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hosts={hosts} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details areas={areas} isSelected={isSelected} changeHostActive={changeHostActive} value={value} setValue={setValue} onChangeAreaOption={onChangeAreaOption} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
