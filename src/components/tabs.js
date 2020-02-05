import React, { useState } from "react";
import { Ulinline, Tab } from "../style/tabs_style";

const Tabs = props => {
  const { selected, children } = props;

  const [selectedProps, setSelectedProps] = useState(selected);

  return (
    <div>
      <Ulinline>
        {children.map((elem, index) => {
          let style = index === selectedProps ? "selected" : "";

          return (
            <li
              className={style}
              key={index}
              onClick={e => setSelectedProps(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </Ulinline>
      <Tab>{children[selectedProps]}</Tab>
    </div>
  );
};

export default Tabs;
