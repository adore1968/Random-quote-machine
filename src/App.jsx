import { React, useEffect } from "react";
import Quote from "./components/Quote";
import SocialMedia from "./components/SocialMedia";
import Loading from "./components/Loading";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  getQuotes,
  getRandomQuote,
} from "./features/quotes/quotesSlice";

const url = "https://type.fit/api/quotes";

function App() {
  const loading = useSelector((store) => store.quotesSlice.loading);
  const color = useSelector((store) => store.quotesSlice.color);
  const dispatch = useDispatch();

  const fetchQuotes = async () => {
    try {
      dispatch(setLoading());
      const response = await fetch(url);
      const quotes = await response.json();
      dispatch(getQuotes(quotes));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-vh-100" style={{ backgroundColor: `${color}` }}>
      <section className="section-padding d-flex justify-content-center align-items-center min-vh-100">
        <div id="quote-box" className="col-md-6 bg-white card">
          <div className="card-body">
            <Quote color={color} />
            <div className="d-flex justify-content-between align-items-center">
              <SocialMedia color={color} />
              <div>
                <button
                  onClick={() => dispatch(getRandomQuote())}
                  className="btn card-subtitle text-white"
                  style={{ backgroundColor: `${color}` }}
                >
                  New quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
