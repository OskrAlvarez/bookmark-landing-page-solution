const onEvent = (event, element, callback) => 
  element.addEventListener(event, callback)

const tabButtonList = document.querySelectorAll('.tab-button') 

const changeTab = (button) => {
  const buttonParent = button.parentNode;
  const granParent = buttonParent?.parentNode;
  const tabContainer = granParent?.querySelector('.tab-container')
  
  const childrenList = Array.from(buttonParent.children)
  const index = childrenList.findIndex(item => item === button)

  tabContainer.style.transform = `translatex(-${index * 100}%)`
}

const changeActiveClass = (button) => {
  const buttonParent = button.parentNode;
  
  buttonParent?.querySelectorAll('.tab-button.active')
    .forEach(activeBtn => activeBtn.classList.remove('active'))
  button.classList.add('active')
} 

tabButtonList.forEach((button) => {
  onEvent('click', button, () => {
    changeTab(button)
    changeActiveClass(button)
  })
})