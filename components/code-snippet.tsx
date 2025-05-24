const CodeSnippet = ({
  className,
  code,
}: {
  className?: string;
  code: string;
}) => {
  return (
    <pre
      className={`border-white border text-sm text-white rounded-sm p-4 overflow-x-auto my-4 ${className}`}
    >
      {code}
    </pre>
  );
};
const Solution = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  return (
    <pre
      className={`bg-gray-800 border border-white text-sm text-white rounded-xl p-4 overflow-x-auto mt-4 ${className}`}
    >
      {code}
    </pre>
  );
};

export { CodeSnippet, Solution };
