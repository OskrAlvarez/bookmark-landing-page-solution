const accordionTrigger = document.querySelectorAll('.accordion-trigger')  

const changeHeight = (element) => {
  let height = 0;
  if(element.clientHeight === 0) {
    height = element.scrollHeight
  }
  element.style.height = `${height}px`
}

accordionTrigger.forEach((element) => {
  element.addEventListener('click', () => { 
    const container = element.parentNode
    const arrow = element.querySelector('.arrow')
    const accordionContent = container.querySelector('.accordion-content')
    arrow.classList.toggle('rotate')
    changeHeight(accordionContent)
  })
});