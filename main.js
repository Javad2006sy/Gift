const tabs = document.querySelectorAll(".tab");
const nextBtns = document.querySelectorAll(".next-btn");

let currentTabIndex = Number(
	document.querySelector('.tab[data-tab-active="true"]').dataset.tabIndex,
);

nextBtns.forEach((btn) => {
	btn.addEventListener("click", toggleTabs);
});

function toggleTabs() {
	const currentTab = document.querySelector(
		`.tab[data-tab-index="${currentTabIndex}"]`,
	);
	const nextTab = document.querySelector(
		`.tab[data-tab-index="${currentTabIndex + 1}"]`,
	);

	if (!nextTab) return;

	currentTab.setAttribute("data-tab-active", false);
	nextTab.setAttribute("data-tab-active", true);
}
