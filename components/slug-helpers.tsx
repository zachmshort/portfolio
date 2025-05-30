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
      <Title title="Approach" />
      <ul className={``}>
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
      <Title title="Complexity" />
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
      <Title title="Performance" />
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
      <Title title="Edge Cases" />
      <ul>
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
      <Title title="Reflections" />
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
      <Title title="Problem" />
      <ul>
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {input && output && <p className={`pt-2`}>Example: </p>}
      {input && <p>Input: {input}</p>}
      {output && <p>Output: {output}</p>}
    </>
  );
};

const Title = ({ title }: { title: string }) => {
  return <h2 className={`text-2xl pt-5 pb-1 font-semibold`}>{title}</h2>;
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
