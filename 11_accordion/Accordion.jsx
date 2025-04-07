import React, { useState } from "react";

export default function Accordion() {
  const [accordions, setAccordions] = useState([
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      toggle: true,
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      toggle: true,
    },
    {
      title: "JavaScript ",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      toggle: true,
    },
  ]);

  function toggleDisplay(idx) {
    const firstSlice = accordions.slice(0, idx);
    const lastSlice = accordions.slice(idx + 1);
    const newToggled = {
      ...accordions[idx],
      toggle: !accordions[idx].toggle,
    };
    console.log(newToggled);
    setAccordions([...firstSlice, newToggled, ...lastSlice]);
  }

  return (
    <div>
      {accordions.map((acc, idx) => (
        <div>
          <button onClick={() => toggleDisplay(idx)}>
            {`${acc.title} `}
            <span aria-hidden={true} className="accordion-icon" />
          </button>
          <div>{acc.toggle && acc.content}</div>
        </div>
      ))}
    </div>
  );
}
