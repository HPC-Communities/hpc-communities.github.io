function highlight() {
	const hash = window.location.hash;
	if (hash) {
		const id = hash.substring(1);
		const element = document.getElementById(id);
		if (element) {
			element.classList.add("highlighted");
			setTimeout(() => {
				element.classList.remove("highlighted");
			}, 1000);
		}
	}
});

window.addEventListener("hashchange", highlight);
document.addEventListener("DOMContentLoaded", highlight);

