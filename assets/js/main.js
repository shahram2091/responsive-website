/*==================== CHANGE BACKGRAOUND HEADER====================*/
function scrollHeader(){
	const header = document.getElementById('header')
	//when the scroll is greater than 50 viewport height, add
	if(this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*====================  SERVICE MODAL ====================*/
const 	modalViews = document.querySelectorAll('.service_modal'),
		modalBtns = document.querySelectorAll('.service_button'),
		modalClose = document.querySelectorAll('.service_modal-close')
let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb, i)  => {
	mb.addEventListener('click', () =>{
		modal(i)                  
	})
})                                                                     
modalClose.forEach((mc) =>{
	mc.addEventListener('click',() =>{
		modalViews.forEach((mv) =>{
		 mv.classList.remove('active-modal')
	   })
   })
})	
/*=============== MIXTUP FILTER PORTFOLIO ============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});
/*link active work*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
	linkWork.forEach(l=> l.classList.remove('active-work'))
	this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click',activeWork))


/*=============== SWIPER TESTIMONIAL ============*/
let swiperTestimonial = new Swiper(".testimonial_container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
 });


/*=============== SCROLL SECTION ACTIVE LINK ============*/
const sections = document.querySelectorAll('section[id]')
 function scrollActive(){
 	const scrollY = window.pageYOffset

 	sections.forEach(current =>{
 		const sectionHeight = current.offsetHeight,
 			  sectionTop = current.offsetTop - 58,
 			  sectionId = current.getAttribute('id')

 			  if(scrollY > sectionTop && scrolly <= sectionTop + sectionHeight){
 			  	document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
 			  }else{
 			  	document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
 			  }
 	})
 }
window.addEventListener('scroll',scrollActive)
/*=============== LIGHT DARK THEME ============*/
const themeButton = document.getElementById('theme-button')
const  lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

//Perviusly selected topic (if user delected)
const selectedTheme = localStorage.getIthem('selected-theme')
const selectedIcon = localStorage.getIthem('selected-icon')

//we obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

//we validate if the user previusly chose a topic
if (selectedTheme){
	//if the validation is fulfilled,we ask what the issue was to know if we activated or deactivated the light
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
}	document.body.classList[selectedTheme === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
//Active /deactive the theme manually with the button
themeButton.addEventListener('click',() =>{
	//Add or remove the light / icon theme
	document.body.classList.toggle(lightTheme)
	themeButton.classList.toggle(iconTheme)
	//we save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme',getCurrentTheme())
	localStorage.setItem('selected-icon',getCurrenticon())
})
/*=============== SCROLL REVEAL ANIMATION ============*/