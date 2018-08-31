const iWrap = document.querySelector('#query')
const iSearch = document.querySelector('#query #key')
const iButton = document.createElement('button')
iWrap.parentNode.style.textAlign = 'center'
iSearch.style.display = 'inline-block'
iSearch.style.boxSizing = 'border-box'
iSearch.style.lineHeight = '20px'
iSearch.style.height = '50px'

iButton.innerText = '注入\n显示'
iButton.style.border = '5px solid #16a085'
iButton.style.width = '50px'
iButton.style.height = '50px'
iButton.style.lineHeight = '20px'
iButton.style.verticalAlign = 'bottom'
iButton.style.color= '#FFFFFF'
iButton.style.backgroundColor= '#1abc9c'
iWrap.append(iButton)

const inject = (e) => {
  const parent = e.target.parentNode
  const url = parent.firstChild.innerText
  const script = document.createElement('script')
  script.src = url
  script.onload = () => {console.info(`Load success: ${url}`)}
  document.body.appendChild(script)
  e.target.remove()
}

iButton.addEventListener('click', (e) => {
  const iAssets = document.querySelectorAll('.assetFile')
  iAssets.forEach(item => {
    const iSpan = document.createElement('span')
    iSpan.innerText = '注入'
    iSpan.style.marginLeft = '5px'
    iSpan.addEventListener('click', inject);
    if (!item.querySelector('span')) {
      item.append(iSpan)
    }
  })
})
