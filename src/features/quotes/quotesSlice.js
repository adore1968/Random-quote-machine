import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  quotes: [],
  quote: null,
  color: "",
};

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandom = (array) => {
  return Math.floor(Math.random() * array.length);
};

const randomColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandom(hex)];
  }
  return hexColor;
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setLoading: (state) => {
      return { ...state, loading: true };
    },

    getQuotes: (state, action) => {
      const newQuotes = action.payload.filter((quote) => quote.author);

      const randomQuote = newQuotes[getRandom(newQuotes)];

      return {
        ...state,
        quotes: newQuotes,
        quote: randomQuote,
        loading: false,
        color: randomColor(),
      };
    },

    getRandomQuote: (state) => {
      const randomQuote =
        state.quotes[Math.floor(Math.random() * state.quotes.length)];
      return { ...state, quote: randomQuote, color: randomColor() };
    },
  },
});

export const { setLoading, getQuotes, getRandomQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
