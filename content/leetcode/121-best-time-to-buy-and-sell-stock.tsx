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
  title: "Best Time to Buy and Sell Stock",
  date: "2025-03-03T00:00:00Z",
  tags: ["array", "dynamic programming", "easy"],
  code: [goSolution],
  languages: ["Go"],
  children: <p></p>,
};

export default post;
