const codeBlock = `func findDisappearedNumbers(nums []int) []int {
    output := []int{}
    hashMap := make(map[int]int)

    for _,num := range nums {
        hashMap[num]++
    }

    for i := 1; i < len(nums); i++ {
        if _,exists := hashMap[i]; !exists {
            output = append(output, i)
        }
    }

    return output
}
`;

const codeSnippet2 = `if hashMap[i] > 1 {
            total = total + hashMap[i] - 1
        }
`;

const post = {
  title: "Find All Numbers Disappeared in an Array",
  date: "2025-05-22T00:00:00Z",
  tags: ["array", "hash table", "easy"],
  code: [
    `func findDisappearedNumbers(nums []int) []int {
    output := []int{}
    hashMap := make(map[int]int)

    for _,num := range nums {
        hashMap[num]++
    }

    total := 0
    for i := 1; i < len(nums); i++ {
        if _, exists := hashMap[i]; !exists {
            output = append(output, i)
        }
        if hashMap[i] > 1 {
            total = total + hashMap[i] - 1
        }
    }

    missingNumber := total - len(output)

    if missingNumber == 1 {
        output = append(output, len(nums))
    }
    return output
}
`,
  ],
  languages: ["Go"],
  children: (
    <>
      <p>
        Working through this problem, I noticed it is very similar to the
        previous problem I encountered (268). However, in this problem you have
        to return an array of missing numbers instead of just one, which
        complicates it slightly. I got to this point rather quickly utilizign a
        hash map instead of sorting:
      </p>
      <pre className="bg-gray-800 text-sm my-3 text-white rounded-xl p-4 overflow-x-auto">
        {codeBlock}
      </pre>
      <p>
        Afterwards I thought, I need a way to keep track of whether or not the
        last value was added to the output list or not, because in some
        instances it is, and in others it isn't. My basic solution was to keep a
        running tally everytime a number occured more than once. For example
        with the input [1,1], the corresponding hashMap is map[1:2]. And this is
        where the following check comes into play.
      </p>
      <pre className="bg-gray-800 text-sm my-3 text-white rounded-sm  p-4 overflow-x-auto">
        {codeSnippet2}
      </pre>
      <p>
        Here I calculate the number of missing numbers there are in total. In
        the example previously mentioned, the total would become 2 - 1 = 1.
        Meaning there is one number missing from the output. Then I check at the
        very end if there is exactly one missing number, if there is, it is the
        len(nums), so it can safely be appended. I have no doubt there is a
        better implementation and I will revisit this in the near future and
        likely find a much simplier solution.
      </p>
    </>
  ),
};

export default post;
