import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";

function Quote({ color }) {
  const quote = useSelector((store) => store.quotesSlice.quote);

  if (!quote) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="card-text text-center" style={{ color: `${color}` }}>
        {quote.text}
      </h2>
      <p className="card-subtitle text-end my-4" style={{ color: `${color}` }}>
        -{quote.author}
      </p>
    </div>
  );
}

export default Quote;
