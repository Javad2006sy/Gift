const nextBtns = document.querySelectorAll(".next-btn");
const unlockGiftBtn = document.querySelector(".unlock-gift");
const noBtn = document.querySelector(".no-btn");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".btn.popup-close");

let currentTabIndex = Number(
	document.querySelector('.tab[data-tab-active="true"]').dataset.tabIndex,
);

let attempts = 0;
let maxAttempts = 3;

document.querySelector(".popup video").playbackRate = 1.5;

nextBtns.forEach((btn) => {
	btn.addEventListener("click", toggleTabs);
});

noBtn.addEventListener("click", moveNoBtn);
noBtn.addEventListener("mouseover", moveNoBtn);
popupClose.addEventListener("click", togglePopup);

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
	currentTabIndex = Number(nextTab.dataset.tabIndex);
}

function moveNoBtn() {
	noBtn.classList.add("active");

	if (attempts === maxAttempts) {
		maxAttempts += 3;
		togglePopup();
		return;
	}

	let randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
	let randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);

	noBtn.style.setProperty("left", `${randomX}px`);
	noBtn.style.setProperty("top", `${randomY}px`);

	attempts++;
}

function togglePopup() {
	const isOpen = popup.classList.contains("active");

	popup.classList.toggle("active", !isOpen);
}
