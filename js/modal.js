//Activating Modal-Corsi
/* const apriModale = document.getElementById("apri-modale-corso")
const chiudiModale = document.getElementById("chiudi-modale-corso")
const modalContainerCorsi = document.getElementById('modale-container-corsi');
const overlayCorsi = document.getElementById("overlay-corsi");

apriModale.addEventListener("click", apriModaleCorso)
chiudiModale.addEventListener("click", chiudiModaleCorso)
overlayCorsi.addEventListener('click', chiudiModaleCorso);
 */
//console.log("apro modale")
/* function apriModaleCorso() {
	
	let nomeCorso = document.querySelector('#apri-modale-corso').name;
	console.log(nomeCorso + " click");

	let modaleCorso = document.querySelector('.corso-modal').id;
	console.log(modaleCorso + " modale");

	modalContainerCorsi.classList.add('active');
	overlayCorsi.classList.add('active');
} */
//console.log("chiudo modale")
/* function chiudiModaleCorso() {
	
	modalContainerCorsi.classList.remove('active');
	overlayCorsi.classList.remove('active');
} */

/* Animazione apertura Modale Corsi *//////////////////////////////////

/* const modalElements = modal.querySelectorAll(
	".modal-title, .modal-subtitle, .tag-list, .modal-text p, .modal-close-btn, .tag-competenze"
);
modalElements.forEach((el, index) => {
	el.style.opacity = "0";
	el.style.transform = "translateY(20px)";

	setTimeout(() => {
		el.style.transition = `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1
			}s`;
		el.style.opacity = "1";
		el.style.transform = "translateY(0)";
	}, 400 + index * 100);
}); */

/* 	const tags = document.querySelectorAll(".tag");
	tags.forEach((tag) => {
		tag.addEventListener("mouseenter", function () {
			this.style.transition = "all 0.3s ease";
		});
	});
 */


/* prova con diversa*/
// Apre il modale al click su .apri-modale-corso
/* document.querySelectorAll('.apri-modale-corso').forEach(trigger => {
	trigger.addEventListener('click', function (e) {
		e.preventDefault();

		const modalId = this.dataset.modalId;
		const modalSection = document.getElementById(modalId);

		const modalContainer = modalSection.closest('.modal-container-corsi');
		const overlay = modalContainer.querySelector('.overlay');
 */
// Attiva modale e overlay
/* 		overlay.classList.add('active');
		modalContainer.classList.add('active');
	});
}); */

// Chiude il modale al click su [data-chiudi-modale-corso]
/* document.querySelectorAll('[data-chiudi-modale-corso]').forEach(btn => {
	btn.addEventListener('click', () => {
		const modalContainer = btn.closest('.modal-container-corsi');
		const overlay = modalContainer.querySelector('.overlay');
		overlay.classList.remove('active');
		modalContainer.classList.remove('active');
	});
}); */

// Chiude cliccando sull'overlay
/* document.querySelectorAll('.modal-container-corsi .overlay').forEach(overlay => {
	overlay.addEventListener('click', () => {
		const modalContainer = overlay.closest('.modal-container-corsi');
		overlay.classList.remove('active');
		modalContainer.classList.remove('active');
	});
});
 */
//-------------------------------------------------------------------
/* movimento prova*/
//---------------------------------------------------------------
// ✅ Funzione che abilita interattività e "hover manuale"
function abilitaInterattività(modalSection) {
	console.log('abilitaInterattività chiamata');
	const interattivi = modalSection.querySelectorAll('.tag, .tag-competenze, .modal-corso-close-btn');
	console.log('Elementi trovati:', interattivi);

	interattivi.forEach(el => {
		console.log('Animazione su:', el);
		el.classList.add('slide-left');
		setTimeout(() => {
			el.classList.add('interattivo');
			console.log('Classe interattivo aggiunta a:', el);
		}, 300);
	});
}


// ✅ Funzione che disabilita interattività e rimuove effetti JS
function disabilitaInterattività(modalSection) {
	const interattivi = modalSection.querySelectorAll('.tag, .tag-competenze, .modal-corso-close-btn');

	interattivi.forEach(el => {
		el.classList.remove('interattivo');
		el.style.opacity = '';
		el.style.background = '';

		// 👇 Evita di rimuovere i listener dal bottone chiusura
		if (!el.classList.contains('modal-corso-close-btn')) {
			const cloned = el.cloneNode(true);
			el.replaceWith(cloned);
		}
	});
}

// Apertura modale
document.querySelectorAll('.apri-modale-corso').forEach(trigger => {
	trigger.addEventListener('click', function (e) {
		e.preventDefault();

		const modalId = this.dataset.modalId;
		const modalSection = document.getElementById(modalId);
		const modalContainer = modalSection.closest('.modal-container-corsi');
		const overlay = modalContainer.querySelector('.overlay');

		overlay.classList.add('active');
		modalContainer.classList.add('active');

		modalSection.querySelectorAll('.fade-in, .slide-left, .fade-in-top').forEach(el => {
			el.classList.remove('fade-in', 'slide-left', 'fade-in-top');
		});

		const elements = modalSection.querySelectorAll('*');
		let delay = 0;
		elements.forEach((el) => {
			setTimeout(() => {
				if (el.classList.contains('tag') || el.classList.contains('tag-competenze')) {
					el.classList.add('slide-left');
				} else if (modalSection.querySelector('.modal-text') && modalSection.querySelector('.modal-text').contains(el)) {
					// gestione modal-text
				} else {
					el.classList.add('fade-in');
				}
			}, delay);
			delay += 80;
		});

		const modalText = modalSection.querySelector('.modal-text');
		if (modalText) {
			const children = Array.from(modalText.children);
			children.forEach((child, index) => {
				child.style.opacity = 0;
				child.style.transform = 'translateY(-20px)';
				setTimeout(() => {
					child.classList.add('fade-in-top');
				}, index * 300);
			});
		}

		/* adattaImmagineModale(modalSection);{
		funzione vuota xke?
		} */

		// Delay per sicurezza prima di abilitare l'interattività
		setTimeout(() => {
			abilitaInterattività(modalSection);
		}, 500);
	});
});

// ✅ Chiusura modale tramite pulsante
document.querySelectorAll('[data-chiudi-modale-corso]').forEach(btn => {
	btn.addEventListener('click', () => {
		const modalContainer = btn.closest('.modal-container-corsi');
		const modalSection = modalContainer.querySelector('.corso-modal');
		const overlay = modalContainer.querySelector('.overlay');

		overlay.classList.remove('active');
		modalContainer.classList.remove('active');

		// Disattiva interattività e rimuove eventi hover
		disabilitaInterattività(modalSection);
	});
});

// ✅ Chiusura modale cliccando sull’overlay
document.querySelectorAll('.modal-container-corsi .overlay').forEach(overlay => {
	overlay.addEventListener('click', () => {
		const modalContainer = overlay.closest('.modal-container-corsi');
		const modalSection = modalContainer.querySelector('.corso-modal');

		overlay.classList.remove('active');
		modalContainer.classList.remove('active');

		// Disattiva interattività e rimuove eventi hover
		disabilitaInterattività(modalSection);
	});
});




// ------------------------------------------------------------------
// RESPONSIVE MOBILE: Fix per il pulsante chiusura sempre visibile
// ------------------------------------------------------------------
/* window.addEventListener('resize', fixModalCloseButton);
window.addEventListener('load', fixModalCloseButton);

function fixModalCloseButton() {
	const modals = document.querySelectorAll('.modal-container-corsi');

	modals.forEach(container => {
		const modal = container.querySelector('.corso-modal');
		const closeBtn = container.querySelector('.modal-close-btn');

		if (window.innerWidth < 768) {
			// Mobile: lo rende *fisso in alto a destra dello schermo*
			closeBtn.style.position = 'fixed';
			closeBtn.style.top = '20px';
			closeBtn.style.right = '20px';
			closeBtn.style.zIndex = '9999';
		} else {
			// Desktop: posizione normale
			closeBtn.style.position = 'absolute';
			closeBtn.style.top = '15px';
			closeBtn.style.right = '15px';
		}
	});
}

 */







/* const testimonialsModalFunc = function () {
	modalContainer.classList.toggle('active');
	overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener('click', function () {
		modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
		modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
		modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
		modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

		testimonialsModalFunc();
	})
} */






//prova
/* document.addEventListener("DOMContentLoaded", () => {
	const card = document.querySelector(".card");
	const modalOverlay = document.querySelector(".modal-overlay");
	const modalClose = document.querySelector(".modal-close");
	const modal = document.querySelector(".modal");
	
	card.style.opacity = "0";
	card.style.transform = "translateY(30px)";
	
	setTimeout(() => {
		card.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
		card.style.opacity = "1";
		card.style.transform = "translateY(0)";
		}, 300);
		
		const openModal = (e) => {
			e.preventDefault();
			modalOverlay.classList.add("active-modal");
			
			const modalElements = modal.querySelectorAll(
			".modal-title, .modal-subtitle, .tag-list, .modal-text p, .btn, .modal-share"
			);
			modalElements.forEach((el, index) => {
				el.style.opacity = "0";
				el.style.transform = "translateY(20px)";
				
				setTimeout(() => {
					el.style.transition = `all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${
						index * 0.1
						}s`;
						el.style.opacity = "1";
						el.style.transform = "translateY(0)";
						}, 400 + index * 100);
						});
						
						document.body.style.overflow = "hidden";
						};
						
						const closeModal = () => {
							modalOverlay.classList.remove("active");
							document.body.style.overflow = "";
							};
							
							readMoreBtn.addEventListener("click", openModal);
							card.addEventListener("click", (e) => {
								if (e.target !== readMoreBtn && !readMoreBtn.contains(e.target)) {
									openModal(e);
		}
	});

	modalClose.addEventListener("click", closeModal);
	modalOverlay.addEventListener("click", (e) => {
		if (e.target === modalOverlay) {
			closeModal();
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
			closeModal();
		}
	});

	const buttons = document.querySelectorAll(".btn");
	buttons.forEach((button) => {
		button.addEventListener("mouseenter", function () {
			this.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
		});
	});

	const tags = document.querySelectorAll(".tag");
	tags.forEach((tag) => {
		tag.addEventListener("mouseenter", function () {
			this.style.transition = "all 0.3s ease";
		});
	});

	const shareIcons = document.querySelectorAll(".share-icon");
	shareIcons.forEach((icon) => {
		icon.addEventListener("mouseenter", function () {
			this.style.transition = "all 0.3s ease";
		});
	});
});
 */

