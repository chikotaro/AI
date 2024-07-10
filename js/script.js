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

// pick up ----
const swiperWrapper = document.querySelector(".swiper-wrapper");
const pickUpList = [
	{
		img: "pickup-image1.png",
		title: "株式会社〇〇〇〇",
		description:
			"TaskMentorAIを導入して以来、業務の合理化とスキル向上が進み、社員たちはより満足度の高い仕事ができています。特にAIエージェントのサポートは頼りになります。",
	},
	{
		img: "pickup-image2.png",
		title: "〇〇大学〇〇研究室",
		description:
			"TaskMentorAIの導入により、教職員がAIエージェントを利用して、教育研究業務の効率向上しました。また、学内のAIリテラシーも向上しました。",
	},
	{
		img: "pickup-image1.png",
		title: "株式会社〇〇〇〇",
		description:
			"情報の一元管理とAIエージェントの質の高さに驚いています。ビジネスの未来に向けて頼りになるパートナーです。",
	},
	{
		img: "pickup-image2.png",
		title: "株式会社〇〇〇〇",
		description:
			"WA2の導入により、当社の技術者たちは最先端の知識を手に入れ、プロジェクトの成功に向けてよりスムーズに作業できるようになりました。当社に必須のツールです。",
	},
];

for (let i = 0; i < pickUpList.length; i++) {
	const { img, title, description } = pickUpList[i];
	const content = `<div class="swiper-slide pickUp-cards"><div class="pickUp-card"><img src="./images/${img}" alt="" /><div class="pickUp-card-ttl">${title}</div><p class="pickUp-card-desc">${description}</p></div></div>`;

	swiperWrapper.insertAdjacentHTML("afterbegin", content);
}

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
