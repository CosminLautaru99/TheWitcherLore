const char_card = document.querySelectorAll(
	"div.char-card-1, div.char-card-2, div.char-card-3"
)
const char_img = document.querySelectorAll(
	"img.char-img-1, img.char-img-2, img.char-img-3"
)
const char_info = document.querySelectorAll(
	"div.char-info-1, div.char-info-2, div.char-info-3"
)
let i = 0
let char_card_section = document.querySelector("#caracter-cards")
console.log(char_card_section)
let char_card_index

for (i = 0; i < char_card.length; i++) {
	;(function (index) {
		char_card_section.children[i].onmouseover = function () {
			char_card_index = index
		}
	})(i)
}

opacity100MouseOver = () => {
	for (i = 0; i < char_card.length; i++) {
		if (
			char_card[char_card_index] ==
			document.querySelector(`.char-card-${i + 1}`)
		) {
			char_info[i].classList.remove("opacity100text")
			char_img[i].classList.add("opacity20")
		}
	}
}
opacityMouseOut = () => {
	for (i = 0; i < char_card.length; i++) {
		if (
			char_card[char_card_index] ==
			document.querySelector(`.char-card-${i + 1}`)
		) {
			char_info[i].classList.add("opacity100text")
			char_img[i].classList.remove("opacity20")
		}
	}
}

for (i = 0; i < char_card.length; i++) {
	char_card[i].addEventListener("mouseover", opacity100MouseOver)
	char_card[i].addEventListener("mouseout", opacityMouseOut)
}
