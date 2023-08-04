import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import "./styles/index.scss";
import { columns, data } from "./data/mainTabledata";

const mainTable = new Grid({
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
const form = document.querySelector(".modalForm");

const handleCloseModal = () => {
	backdrop.classList.add("is-hidden");

	backdrop.removeEventListener("click", handleCloseClick);
	document.removeEventListener("keydown", handleCloseClick);
	form.removeEventListener("submit", handleFormSubmit);
};

const handleCloseClick = e => {
	if (
		e.target.classList.contains("modalCloseBtn") ||
		e.target.classList.contains("modalCloseIcon") ||
		e.code === "Escape" ||
		e.target.classList.contains("backdrop")
	) {
		handleCloseModal();
	}
};

const handleFormSubmit = e => {
	e.preventDefault();
	const form = e.currentTarget;
	const { name, category, content } = form.elements;

	const newNote = {
		name: name.value,
		category: category.value,
		content: content.value,
		created: new Date().toDateString(),
	};
	console.log("data", data);

	data.push(newNote);
	mainTable.forceRender();

	handleCloseModal();
};

const handleOpenBtnClick = e => {
	backdrop.classList.remove("is-hidden");

	document.addEventListener("keydown", handleCloseClick);
	backdrop.addEventListener("click", handleCloseClick);
	form.addEventListener("submit", handleFormSubmit);
};

modalOpenBtn.addEventListener("click", handleOpenBtnClick);
