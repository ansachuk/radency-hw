import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import "./styles/index.scss";
import { columns, data } from "./data/mainTabledata";

new Grid({
	columns,
	data,
	className: {
		th: "mainTh",
		td: "mainTd",
		table: "mainTable",
	},
}).render(document.getElementById("mainTable"));
