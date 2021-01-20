import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ areas, isSelected, changeHostActive, value, setValue, onChangeAreaOption }) {
  const [isChecked, setIsChecked] = useState(isSelected.active)
  
  
  function cleanUpName(name) {
    let cleanedName = name

    if (name.split("").includes("_")) {
      let nameArray = name.split("_")
      nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1)
      nameArray[1] = nameArray[1].charAt(0).toUpperCase() + nameArray[1].slice(1)
      cleanedName = nameArray.join(" ")
    } else {
      cleanedName = name.charAt(0).toUpperCase() + name.slice(1)
    }
    return cleanedName
  }

  const areaStateArray = areas.map(area => {
    return {key: area.name, text: cleanUpName(area.name), value: area.name}
  })
  
  const [options, setOptions] = useState(areaStateArray);
  

  function handleOptionChange(e, { value }) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    setValue(value)
    onChangeAreaOption(value)
  }

  function handleRadioChange() {
    changeHostActive()
    setIsChecked(!isChecked)
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={isSelected.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {isSelected.firstName} | {isSelected.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={isChecked ? "Active" : "Decommissioned"}
                checked={isChecked}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
