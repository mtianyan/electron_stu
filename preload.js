// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })

// window.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('node-version').innerHTML = process.version.node
// })

const {ipcRenderer} = require('electron')
const {BrowserWindow} = require('electron').remote

window.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('node-version').innerText = process.versions.node
  document.getElementById('send').addEventListener('click', ()=>{
    ipcRenderer.send("message", "hello from renderer")
    let win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.loadURL('http://www.mtianyan.cn')
  })
  ipcRenderer.on('reply', (event,arg)=>{
    document.getElementById('message').innerHTML = arg
  })
})

