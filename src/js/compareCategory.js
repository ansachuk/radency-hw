import { html } from "gridjs";

import { TASK, THOUGHT, QOUTE, IDEA } from "../data/categoriesList";

import sprite from "../icons/sprite.svg";

const makeCellString = (iconHref, cell) => {
	return html(
		`<span class="iconWrapper"><svg class="mainIcon" width="54" height="54">
			<use href="${sprite}#${iconHref}"></use>
		</svg></span><p>${cell}</p>`,
		"div",
	);
};

const compareCategory = (cell, row) => {
	const category = row._cells[2].data.toLowerCase();

	switch (category) {
		case IDEA:
			return makeCellString(IDEA, cell);

		case THOUGHT:
			return makeCellString(THOUGHT, cell);

		case QOUTE:
			return makeCellString(QOUTE, cell);

		case TASK:
			return makeCellString(TASK, cell);

		default:
			console.error("Undefined category");
			break;
	}
};
export default compareCategory;
