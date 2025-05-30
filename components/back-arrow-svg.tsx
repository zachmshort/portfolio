import Link from "next/link";

const BackArrowIcon = () => {
  return (
    <Link
      href="/blog/leetcode"
      className={`absolute lg:fixed border border-white rounded py-2 px-3 left-6 top-6 flex flex-row items-center gap-x-2`}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 h-4`}
      >
        <path d="M208,76H124V32a4,4,0,0,0-6.83-2.83l-96,96a4,4,0,0,0,0,5.66l96,96A4,4,0,0,0,124,224V180h84a12,12,0,0,0,12-12V88A12,12,0,0,0,208,76Zm4,92a4,4,0,0,1-4,4H120a4,4,0,0,0-4,4v38.34L29.66,128,116,41.66V80a4,4,0,0,0,4,4h88a4,4,0,0,1,4,4Z"></path>
      </svg>
      <p className={`text-xs`}>Problem List</p>
    </Link>
  );
};
export default BackArrowIcon;
