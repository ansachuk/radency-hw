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

const backdrop = document.querySelector(".backdrop");
const modalOpenBtn = document.querySelector(".modalOpenBtn");

const handleCloseModal = () => {
	backdrop.classList.add("is-hidden");
	backdrop.removeEventListener("click", handleCloseClick);
	document.removeEventListener("keydown", handleCloseClick);
};

const handleCloseClick = e => {
	if (e.target.classList.contains("modalCloseBtn") || e.code === "Escape" || e.target.classList.contains("backdrop")) {
		handleCloseModal();
		console.log("e", e);
	}
};

const handleOpenBtnClick = e => {
	backdrop.classList.remove("is-hidden");

	document.addEventListener("keydown", handleCloseClick);
	backdrop.addEventListener("click", handleCloseClick);
};

modalOpenBtn.addEventListener("click", handleOpenBtnClick);
