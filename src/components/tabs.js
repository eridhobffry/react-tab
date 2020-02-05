import React, { useState } from "react";
import { Ulinline, TabContent } from "../style/tabs_style";

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
      <TabContent>{children[selectedProps]}</TabContent>
    </div>
  );
};

export default Tabs;
