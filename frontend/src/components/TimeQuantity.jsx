import React from "react";

function TimeQuantity({ value, type, colons }) {
  return (
    <>
      <div>
        <p className="text-6xl font-semibold text-primary">{value}</p>
        <p className="text-md font-semibold text-primary ">
          {type.toUpperCase()}
        </p>
      </div>
      {colons && <p className="text-6xl font-bold text-primary mx-2">:</p>}
    </>
  );
}

export default TimeQuantity;
