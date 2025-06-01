const quotes = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "You cannot escape the responsibility of tomorrow by evading it today.",
    author: "Abraham Lincoln",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The future is not something we enter. The future is something we create.",
    author: "Leonard I. Sweet",
  },
  {
    quote: "The future belongs to those who prepare for it today.",
    author: "Malcolm X",
  },
  {
    quote: "The future is not a gift, it is an achievement.",
    author: "Robert F. Kennedy",
  },
  { quote: "The future is always beginning now.", author: "Mark Strand" },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
