import React, { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("HTML");

  function handleChangeTab(tab) {
    setActiveTab(tab);
  }

  return (
    <div>
      <div>
        {["HTML", "CSS", "JavaScript"].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              onClick={() => handleChangeTab(tab)}
              style={{
                backgroundColor: isActive ? "blue" : "white",
                color: isActive ? "white" : "black",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div>
        <p style={{ display: activeTab === "HTML" ? "block" : "none" }}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
        <p style={{ display: activeTab === "CSS" ? "block" : "none" }}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
        <p style={{ display: activeTab === "JavaScript" ? "block" : "none" }}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </p>
      </div>
    </div>
  );
}
