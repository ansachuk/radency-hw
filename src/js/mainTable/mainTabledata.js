import { compareCategory, optionsFormatter } from "../formaters";

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
		formatter: optionsFormatter,
	},
	{
		name: "_id",
		hidden: true,
	},
];
export const data = [
	{ _id: 1, name: "Task 1", created: "April 20 2020", category: "Task", content: "Tomatoes" },
	{ _id: 2, name: "Task 2", created: "April 20 2020", category: "Idea", content: "Tomatoes" },
	{ _id: 3, name: "Task 3", created: "April 20 2020", category: "Thought", content: "Tomatoes" },
	{ _id: 4, name: "Task 4", created: "April 20 2020", category: "Task", content: "Tomatoes" },
	{ _id: 5, name: "Task 5", created: "April 20 2020", category: "Quote", content: "Tomatoes" },
	{ _id: 6, name: "Task 6", created: "April 20 2020", category: "Thought", content: "Tomatoes" },
	{ _id: 7, name: "Task 7", created: "April 20 2020", category: "Idea", content: "Tomatoes" },
	{ _id: 8, name: "Task 8", created: "April 20 2020", category: "Task", content: "Tomatoes" },
];
