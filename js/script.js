const show = (par) => {
	const eS = document.querySelectorAll(".n1, .n2, .n3, .n4, .n5");

	eS.forEach((e) => {
		e.classList.add("d-none");
	});

	const eX = document.querySelector(`.n${par}`);
	if (eX) {
		eX.classList.remove("d-none");
	} else {
		console.log("Fortnite");
	}
};
