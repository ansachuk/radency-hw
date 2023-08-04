import { html } from "gridjs";

import { TASK, THOUGHT, QOUTE, IDEA } from "../data/categoriesList";

import sprite from "../icons/sprite.svg";

const makeCellString = (iconHref, cell) => {
	return html(
		`<div class="iconWrapper"><svg class="mainIcon" width="30" height="30">
			<use href="${sprite}#${iconHref}"></use>
		</svg></div><span class="mainName">${cell}</span>`,
		"div",
	);
};

export const compareCategory = (cell, row) => {
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
export const optionsFormatter = (_, row) => {
	return html(
		'<div class="options"><button type="button" class="optionsButton"><svg class="optionIcon" width="22" height="22"><use href="./src/icons/sprite.svg#edit"></use></svg></button><button type="button" class="optionsButton"><svg class="optionIcon" width="22" height="22"><use href="./src/icons/sprite.svg#archive"></use></svg></button><button type="button" class="optionsButton"><svg class="optionIcon" width="22" height="22"><use href="./src/icons/sprite.svg#delete"></use></svg></button></div>',
	);
};
