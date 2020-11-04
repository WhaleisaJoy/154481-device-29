const sliderControls = document.querySelector(".slider-controls");
const sliderContentItems = document.querySelectorAll(".slider-item");

const tabs = document.querySelector(".services-tabs-controls");
const tabsContent = document.querySelectorAll(".services-tabs-item");

const mapLink = document.querySelector(".contacts-map");
const modalMap = document.querySelector(".modal-map");

const contactsFeedbackBtn = document.querySelector(".contacts-feedback-btn");
const modalFeedback = document.querySelector(".modal-feedback");
const modalFeedbackForm = document.querySelector(".modal-feedback-form");
const modalFeedbackUsername = document.querySelector(".modal-feedback-username");
const modalFeedbackEmail = document.querySelector(".modal-feedback-email");
const modalFeedbackText = document.querySelector(".modal-feedback-text");

let modalClose;

// Slider
if(sliderControls)
{
	sliderControls.addEventListener("click", function(evt)
	{
		let target = evt.target;

		if(target.classList.contains("slider-controls-btn"))
		{
			evt.preventDefault();
			let sliderControlsBtns = sliderControls.children;
			let sliderControlsBtnsArray = [];

			for(let sliderBtn of sliderControlsBtns){ sliderBtn.classList.remove("current"); sliderControlsBtnsArray.push(sliderBtn); }
			for(let sliderContentItem of sliderContentItems){ sliderContentItem.classList.remove("current"); }

			let sliderControlsBtnCurrentIndex = sliderControlsBtnsArray.indexOf(target);

			target.classList.add("current");
			sliderContentItems[sliderControlsBtnCurrentIndex].classList.add("current");
		}
	});
}

// Tabs
if(tabs)
{
	tabs.addEventListener("click", function(evt)
	{
		let target = evt.target;

		if(target.classList.contains("basic-tab"))
		{
			evt.preventDefault();

			let tabsButtons = tabs.children;
			let tabsArray = [];

			for(let tab of tabsButtons) { tab.classList.remove("current"); tabsArray.push(tab); }
			for(let tabContent of tabsContent) { tabContent.classList.remove("current"); }

			let targetIndex = tabsArray.indexOf(target);

			target.classList.add("current");
			tabsContent[targetIndex].classList.add("current");
		}
	});
}

//Modal Map
if(mapLink)
{
	mapLink.addEventListener("click", function(evt)
	{
		evt.preventDefault();
		modalMap.classList.add("open");

		modalClose = modalMap.querySelector(".modal-close");
		closeModal(modalMap, modalClose);
	});
}

//Modal Feedback
if(contactsFeedbackBtn)
{
	contactsFeedbackBtn.addEventListener("click", function(evt)
	{
		evt.preventDefault();
		modalFeedback.classList.add("open");

		modalFeedbackUsername.focus();

		modalClose = modalFeedback.querySelector(".modal-close");
		closeModal(modalFeedback, modalClose);
	});

	modalFeedbackForm.addEventListener("submit", function(evt){
		if(!modalFeedbackUsername.value || !modalFeedbackEmail.value || !modalFeedbackText.value){
			evt.preventDefault();

			modalFeedback.classList.remove("modal-error");
			modalFeedback.offsetWidth = modalFeedback.offsetWidth;
			modalFeedback.classList.add("modal-error");
		}
	});
}

//Modal Close
function closeModal(modal, modalClose){
	modalClose.addEventListener("click", function(evt)
	{
		evt.preventDefault();
		modal.classList.remove("open");

		if(modal.classList.contains("modal-error"))
		{
			modal.classList.remove("modal-error");
		}
	});
}