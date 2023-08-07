import React, { useState } from "react";
import UseFetchApi from "../../Hook/UseFetchApi/UseFetchApi";
import "./SwitchTab.css";

const SwitchTab = ({ data, onChangeTab }) => {
  const [left, setLeft] = useState(0);
  const [selectTab, setSelectTab] = useState(0);
  const onTabHandle = (tab, index) => {
    setLeft(index * 100);
    setSelectTab(index);
    onChangeTab(tab, index);
  };
  return (
    <div className="switchingTab">
      <div className="tabItems">
        {data.map((tab, index) => {
          return (
            <span
              key={index}
              className={`tabItem ${selectTab === index ? "active" : ""}`}
              onChange={(e) => console.log(e.target.value)}
              onClick={() => onTabHandle(tab, index)}
            >
              {tab}
            </span>
          );
        })}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTab;
