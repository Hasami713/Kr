import {generateID} from "../utils";

export const movies = [
	{
		id: generateID(),
		place: 'Джон Уик',
		note: 'Пиф-пиф паф-паф',
		status: 'planned',
	},
	{
		id: generateID(),
		place: 'Джон Уик 2',
		note: 'Пиф-пиф паф-паф 2',
		status: 'completed',
	},
	{
		id: generateID(),
		place: 'Джон Уик 3',
		note: 'Пиф-пиф паф-паф 3',
		status: 'completed',
	},
]
