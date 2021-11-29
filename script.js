const sayHiButton = document.getElementById('sayHi')

const sayHi = async (event) => {
  event.preventDefault()
  
  const arm = document.getElementById('armRight')
  
  const pinguChat = document.getElementById('pinguHiChat')
  
  pinguChat.style.display = 'flex'
  arm.style.animationDuration = '.8s'

  arm.style.animationFillMode = 'forwards'
  arm.style.animationName = 'armUp'
  
  const resetStyle = () => {
    arm.style.animationTimingFunction = 'ease-out'
    arm.style.animationName = 'armDown'
    arm.style.animationIterationCount = '1'
    pinguChat.style.display = 'none'
    
  }
  const animateArm = () => {
    arm.style.animationDuration = '.9s'
    arm.style.animationTimingFunction = 'ease-in'
    arm.style.animationName = 'sayHiArmAnimation'
    arm.style.animationIterationCount = '2'

  }

  setTimeout(animateArm, 800)
  setTimeout(resetStyle, 1700)


}
sayHiButton.addEventListener("click", sayHi,)
