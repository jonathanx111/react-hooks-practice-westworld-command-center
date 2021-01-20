import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

function HostList({ hosts, fromArea, isSelected, setIsSelected, setValue }) {
  let limitCount = 0
  const hostComponentArray = hosts.map(host => {
    if (!fromArea) {
      if (!host.active) {
        return <Host key={host.id} host={host} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
      } else {
        return null
      }
    } else {
      if (host.area === fromArea.name) {
        if (host.active & limitCount <= fromArea.limit) {
          limitCount++
          return <Host key={host.id} host={host} isSelected={isSelected} setIsSelected={setIsSelected} setValue={setValue} />
        } else {
          return null
        }
      } else {
        return null
      }
    }
  })

  return (
    <Card.Group itemsPerRow={6}>
      {hostComponentArray}
    </Card.Group>
  );
}

export default HostList;
