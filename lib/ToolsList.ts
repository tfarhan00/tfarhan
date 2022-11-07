export type iconsListType = {
	id: string,
	src: any,
	name: string,
	type: string,
	desc: string
}

const toolsData: Array<iconsListType> = [
	{
		id: "figma",
		src: "https://ik.imagekit.io/raq7uhmdb2/assets/Icons/Figma-min_-3qlzmkyA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811217568",
		name: "Figma",
		type: "Design Tools",
		desc: "Is the best web based software design tools, that really helped me a lot to prototype any website that i magine"
	},
	{
		id: "notion",
		src: "https://ik.imagekit.io/raq7uhmdb2/assets/Icons/Notion-min_8nxDpfBSc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811217309",
		name: "Notion",
		type: "Note Taking",
		desc: "Don't Worry to lose your memory with this app, simply the best note tools ever"
	},
	{
		id: "sublime",
		src: "https://ik.imagekit.io/raq7uhmdb2/assets/Icons/sublime-min_GS5m3_arT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811219926",
		name: "Sublime",
		type: "Simply Code Editor",
		desc: "In the world of VS Code is time to realize that electron based app are bloated, and we need something faster and snappy"
	},
	{
		id: "postman",
		src: "https://ik.imagekit.io/raq7uhmdb2/assets/Icons/Postman-min_teoQEGAAv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811218367",
		name: "Postman",
		type: "API Testing Tools",
		desc: "Not quite a backend engineer, but this app is a swiss army knife for testing API, or if you want the simpler one there's REQBIN"
	},
	{
		id: "minecraft",
		src: "https://ik.imagekit.io/raq7uhmdb2/assets/Icons/minecraft-min_JJYvkeoYr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811217213",
		name: "Minecraft",
		type: "It's a game",
		desc: "This is clearly not a tool, but this thing certainly helps me from getting burnout"
	},
	{
		id: "vscode",
		src: "https://ik.imagekit.io/raq7uhmdb2/assets/Icons/vscode-min_byDlOxfH2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666811221251",
		name: "VS Code",
		type: "Not So Code Editor",
		desc: "Yepp i know..., i said that VS code is slow but sometimes i need this for certain purpose"
	}
]

export { toolsData }