import "gridjs/dist/theme/mermaid.css";
import { nanoid } from "nanoid";

import mainTable from "./js/mainTable/mainTable";
import { data } from "./js/mainTable/mainTabledata";

import "./styles/index.scss";

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
		_id: nanoid(),
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
