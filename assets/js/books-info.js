const book_card = document.querySelectorAll(
	"div.book-card-1, div.book-card-2, div.book-card-3, div.book-card-4, div.book-card-5, div.book-card-6, div.book-card-7, div.book-card-8"
)
const book_text = document.querySelectorAll(
	"p.book-text-1, p.book-text-2, p.book-text-3, p.book-text-4, p.book-text-5, p.book-text-6, p.book-text-7, p.book-text-8"
)
const book_img = document.querySelectorAll(
	"img.book-img-1, img.book-img-2, img.book-img-3, img.book-img-4, img.book-img-5, img.book-img-6, img.book-img-7, img.book-img-8"
)
const books_card_section = document.querySelector("#book-cards")
/*  */
let book_card_index
/*  */
let i = 0

for (i = 0; i < book_card.length; i++) {
	;(function (index) {
		books_card_section.children[i].onmouseover = function () {
			book_card_index = index
		}
	})(i)
}

opacity100MouseOver = () => {
	for (i = 0; i < book_card.length; i++) {
		if (
			book_card[book_card_index] ==
			document.querySelector(`.book-card-${i + 1}`)
		) {
			book_text[i].classList.remove("opacity100text")
			book_img[i].classList.add("opacity20")
		}
	}
}
opacityMouseOut = () => {
	for (i = 0; i < book_card.length; i++) {
		if (
			book_card[book_card_index] ==
			document.querySelector(`.book-card-${i + 1}`)
		) {
			book_text[i].classList.add("opacity100text")
			book_img[i].classList.remove("opacity20")
			break
		}
	}
}

for (i = 0; i < book_card.length; i++) {
	book_card[i].addEventListener("mouseover", opacity100MouseOver)

	book_card[i].addEventListener("mouseout", opacityMouseOut)
}
