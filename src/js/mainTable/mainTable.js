import { Grid } from "gridjs";
import { columns, data } from "./mainTabledata";

const mainTable = new Grid({
	columns,
	data,
	className: {
		th: "mainTh",
		td: "mainTd",
		table: "mainTable",
	},
}).render(document.getElementById("mainTable"));

export default mainTable;
