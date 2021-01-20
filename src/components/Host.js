import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, isSelected, setIsSelected, setValue}) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  function handleHostClick(e) {
    setIsSelected(host)
    setValue(host.area)
  }

  return (
    <Card
      className={isSelected ? isSelected.id === host.id ? "host selected" : "host" : isSelected === host ? "host selected" : "host"}
      onClick={handleHostClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
