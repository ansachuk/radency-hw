import compareCategory from "../js/compareCategory";

export const columns = [
	{
		name: "Name",
		formatter: compareCategory,
	},
	"Created",

	{
		name: "Category",
		formatter: cell => {
			const letters = cell.split("");
			letters[0] = letters[0].toUpperCase();
			return letters.join("");
		},
	},
	"Content",
	"Dates",
	{
		id: "options",
		// formatter: (_, row) => console.log("row", row),
	},
];
export const data = [
	{ _id: 1, name: "Shopping list", created: "April 20 2020", category: "Task", content: "Tomatoes" },
	{ name: "The theory of evolution", created: "April 20 2020", category: "Idea", content: "Tomatoes" },
	{ name: "Shopping list", created: "April 20 2020", category: "Thought", content: "Tomatoes" },
	{ name: "The theory of evolution", created: "April 20 2020", category: "Task", content: "Tomatoes" },
	{ name: "Shopping list", created: "April 20 2020", category: "Quote", content: "Tomatoes" },
	{ name: "The theory of evolution", created: "April 20 2020", category: "Task", content: "Tomatoes" },
	{ name: "Shopping list", created: "April 20 2020", category: "Task", content: "Tomatoes" },
	{ name: "The theory of evolution", created: "April 20 2020", category: "Task", content: "Tomatoes" },
];
