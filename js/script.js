const classRemoveReasonReverse = document.querySelector(
	".reason-content-reverse"
);
const classRemoveReasonContentImgReverse = document.querySelector(
	".reason-contentImg-reverse"
);
const classRemoveReasonContentItemReverse = document.querySelector(
	".reason-contents-item-reverse"
);
const checkWidthAndRemoveClass = () => {
	const width = document.documentElement.clientWidth;

	if (width <= 1120) {
		if (classRemoveReasonReverse) {
			classRemoveReasonReverse.classList.remove("reason-content-reverse");
		}
		if (classRemoveReasonContentImgReverse) {
			classRemoveReasonContentImgReverse.classList.remove(
				"reason-contentImg-reverse"
			);
		}
		if (classRemoveReasonContentItemReverse) {
			classRemoveReasonContentItemReverse.classList.remove(
				"reason-contents-item-reverse"
			);
		}
	} else {
		if (classRemoveReasonReverse) {
			classRemoveReasonReverse.classList.add("reason-content-reverse");
		}
		if (classRemoveReasonContentImgReverse) {
			classRemoveReasonContentImgReverse.classList.add(
				"reason-contentImg-reverse"
			);
		}
		if (classRemoveReasonContentItemReverse) {
			classRemoveReasonContentItemReverse.classList.add(
				"reason-contents-item-reverse"
			);
		}
	}
};

document.addEventListener("DOMContentLoaded", checkWidthAndRemoveClass);

window.addEventListener("resize", checkWidthAndRemoveClass);

// swiper----

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
