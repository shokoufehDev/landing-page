const toggleIcon = document.querySelector('.toggle__icon')
const mobileMenu = document.querySelector('.mobile__menu')
toggleIcon.addEventListener('click', () => {

    if (toggleIcon.className === "toggle__icon hamburger") {
    toggleIcon.innerHTML = ""
    toggleIcon.insertAdjacentHTML('afterbegin', `<svg class="close-nav" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#458FF6" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>`)
    mobileMenu.style.display = 'block'
    toggleIcon.classList.remove("hamburger")
 
    console.log(toggleIcon.className)
    }
    else{
        toggleIcon.innerHTML = ""
        toggleIcon.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#458FF6" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`)
    mobileMenu.style.display = 'none'
    toggleIcon.classList.add("hamburger") 
    }

    

    
})