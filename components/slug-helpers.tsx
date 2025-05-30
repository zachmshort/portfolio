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

const Approach = ({ items }: { items: string[] }) => {
  return (
    <>
      <h2 className={`text-2xl py-3`}>Approach</h2>
      <ul className={`my-3`}>
        {items.map((item: string, index: number) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </>
  );
};

const Complexity = ({
  time,
  space,
  timeExplanation,
  spaceExplanation,
}: {
  time: string;
  space: string;
  timeExplanation?: string;
  spaceExplanation?: string;
}) => {
  return (
    <>
      <h2 className={`text-2xl py-3`}>Complexity</h2>
      <ul>
        <li>
          <strong>Time:</strong> <code>{time}</code>{" "}
          {timeExplanation && ` - ` + timeExplanation}
        </li>
        <li>
          <strong>Space:</strong> <code>{space}</code>
          {spaceExplanation && ` - ` + spaceExplanation}
        </li>
      </ul>
    </>
  );
};

const Performance = ({ time, memory }: { time: number; memory: number }) => {
  return (
    <>
      <h2 className={`text-2xl py-3`}>Performance</h2>
      <ul>
        <li>
          <strong>Runtime beats:</strong> {time}%
        </li>
        <li>
          <strong>Memory beats:</strong> {memory}%
        </li>
      </ul>
    </>
  );
};

const EdgeCases = ({ items }: { items: string[] }) => {
  return (
    <>
      <h2 className={`text-2xl py-3`}>Edge Cases</h2>
      <ul className={`my-3`}>
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const Reflections = ({ items }: { items: string[] }) => {
  return (
    <>
      <h2 className={`text-2xl py-3 bold`}>Reflections</h2>
      {items.map((item: string, index: number) => (
        <p className={`indent-6`} key={index}>
          {item}
        </p>
      ))}
    </>
  );
};

const Problem = ({
  items,
  input,
  output,
}: {
  items: string[];
  input?: string;
  output?: string;
}) => {
  return (
    <>
      <h2 className={`text-2xl py-3`}>Problem</h2>
      <ul>
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {input && output && <p className={`text-lg pt-2`}>Example: </p>}
      {input && <p>Input: {input}</p>}
      {output && <p>Output: {output}</p>}
    </>
  );
};

export {
  CodeSnippet,
  Solution,
  Approach,
  Complexity,
  Performance,
  EdgeCases,
  Reflections,
  Problem,
};
