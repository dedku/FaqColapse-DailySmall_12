import './style.css'

const toggles = document.querySelectorAll('.faq-toggle') as NodeListOf<HTMLButtonElement>

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    // @ts-ignore
    toggle.parentNode!.classList.toggle('active')
  })
})