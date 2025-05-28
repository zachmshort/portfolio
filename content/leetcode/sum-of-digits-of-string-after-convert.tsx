const goSolution = `func getLucky(s string, k int) int {
	alphabet := map[string]string{
		"a": "1",
		"b": "2",
		"c": "3",
		"d": "4",
		"e": "5",
		"f": "6",
		"g": "7",
		"h": "8",
		"i": "9",
		"j": "10",
		"k": "11",
		"l": "12",
		"m": "13",
		"n": "14",
		"o": "15",
		"p": "16",
		"q": "17",
		"r": "18",
		"s": "19",
		"t": "20",
		"u": "21",
		"v": "22",
		"w": "23",
		"x": "24",
		"y": "25",
		"z": "26",
	}

	str := ""
	for _, rune := range s {
		letter := string(rune)
		str += alphabet[letter]
	}

	return recursiveDigitSum(str, k)
}

func recursiveDigitSum(s string, k int) int {
	res := 0
	for _, runeLetter := range s {
		digit := runeLetter - '0'
		res += int(digit)
	}
    if k == 1 {
	    return res
    }

    return recursiveDigitSum(strconv.Itoa(res), k-1)
};
`;

const post = {
  num: 1945,
  tags: [`string`, `simulation`],
  code: [goSolution],
  date: `2025-05-28T12:00:00Z`,
  difficulty: `easy`,
  languages: [`Go`],
  timeComplexity: [`O(n * k)`],
  spaceComplexity: [`O(n)`],
  timeBeats: [`100%`],
  spaceBeats: [`7.27%`],
  children: (
    <div className="prose prose-lg indent-6">
      <p>
        The <code>getLucky</code> function converts a given lowercase string
        into a numeric string by mapping each letter to its corresponding
        position in the alphabet (a → 1, b → 2, …, z → 26). It then repeatedly
        sums the digits of this numeric string <code>k</code> times to reduce it
        down to a single integer.
      </p>
      <ul>
        <li>
          Each character is converted to its number string using a lookup map,
          then concatenated into one big string.{" "}
          <strong>Recursive digit sum:</strong> The recursiveDigitSum helper
          takes that string, sums all digits, and repeats the process{" "}
          <code>k</code> times.
        </li>
      </ul>
      <p>
        The recursion stops when <code>k</code> reaches 1, returning the final
        sum. This approach is straightforward, but the map lookup for alphabet
        positions is a bit verbose and probably could be replaced with some
        simple trick I'm unaware of at this time, in the past I didn't know that{" "}
        <code>rune - '0'</code> gave you the rune int, so atleast some stuff is
        sticking.
      </p>
      <p>
        The extra space is mainly from the new strings created during recursion,
        which is <code>O(n)</code> in the worst case. This can be optimized by
        avoiding string concatenations and using more in-place computations.
        Overall, this solution beats 100% of submissions on runtime but performs
        horrendously on space, making it a decent solution if time is the issue.
      </p>
    </div>
  ),
};

export default post;
