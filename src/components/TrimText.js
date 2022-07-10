import React from "react";

const TrimText = ({ text, maxLength }) => {
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {text.substring(0, maxLength)}
      ...
    </p>
  );
}

export default TrimText;