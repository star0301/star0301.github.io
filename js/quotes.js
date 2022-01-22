const quotes = [
  {
    quote:
      "Nomad Coder Web education is nonetheless, the world of the best coding education.",
    author: "Dongwook",
  },
  {
    quote:
      "Jisom is very cute. but, unfortunately, nowadays she has become too fat.",
    author: "JiSom",
  },
  {
    quote:
      "The government should take appropriate measure to prevent the infection from being spread.",
    author: "Duo 3.0 320",
  },
  {
    quote: "The minister was obliged to resign from the cabinet",
    author: "Duo 3.0 321",
  },
  {
    quote:
      "Many people regard the current compulsory education system as being obsolete.",
    author: "Duo 3.0 322",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todayQuote =
  quotes[Math.floor(Math.round(Math.random() * quotes.length) / 2)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;
