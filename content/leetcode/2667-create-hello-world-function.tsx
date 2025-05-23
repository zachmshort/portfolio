const post = {
  title: "Create Hello World Function",
  quote: `"An idiot admires complexity, a genius admires simplicity" - Terry A. Davis`,
  date: "2025-01-28T00:00:00Z",
  tags: ["easy"],
  languages: ["JavaScript"],
  code: `var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
`,
  children: (
    <>
      <p>
        This is about as straight forward as it gets in my opinion. It was the
        first leetcode problem I attempted and solved.
      </p>
      <p>
        However, I did overthink it in hindsight and submitted the incorrect
        answer roughly 5 times. Create Hello World Function is a great display
        of simple is better.
      </p>
    </>
  ),
};

export default post;
