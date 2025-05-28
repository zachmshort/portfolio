const goSolution = `func maxProfit(prices []int) int {
	buy := prices[0]
    maxProfit := 0
	for _, price := range prices {
		if price < buy {
			buy = price
		} else {
            profit := price - buy
            if profit > maxProfit {
                maxProfit = profit
            }
		}
	}
	return maxProfit
}
`;

const post = {
  num: 121,
  date: "2025-03-03T12:00:00Z",
  tags: ["array", "dynamic programming"],
  code: [goSolution],
  languages: ["Go"],
  children: <p></p>,
};

export default post;
