const tabs = document.querySelectorAll(".tab");
const nextBtns = document.querySelectorAll(".next-btn");
const unlockGiftBtn = document.querySelector(".unlock-gift");

let currentTabIndex = Number(
	document.querySelector('.tab[data-tab-active="true"]').dataset.tabIndex,
);

nextBtns.forEach((btn) => {
	btn.addEventListener("click", toggleTabs);
});

unlockGiftBtn.addEventListener("click", () => {
	const giftMessage = document.querySelector(".gift-message");
	let count = 3;

	giftMessage.textContent = count;

	let intervalId = setInterval(() => {
		count--;
		giftMessage.textContent = count;

		if (count === 0) {
			document
				.querySelector(".gift-box")
				.setAttribute("data-hidden", false);
			clearInterval(intervalId);
		}
	}, 1000);
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
