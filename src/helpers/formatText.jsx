import React from "react";

const formatText = (text) => {
  const formattedText = text.split("\n").map((x, i) =>
    x.startsWith("http") ? (
      <>
        <a key={i} href={x}>
          {x}
        </a>
        <br />
      </>
    ) : (
      <>
        <span key={i}> {x} </span>
        <br />
      </>
    )
  );
  return formattedText;
};

export default formatText;
