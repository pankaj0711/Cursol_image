//////////////cursol

let hed=document.querySelector('h1')
let para=document.querySelector('p')
console.log(hed)

para.style.cssText="font-size: 22px;color: magenta;font-family: cursive;"
hed.style.cssText="font-size: 30px;color: rgb(0, 128, 255);font-family: cursive;"




let image=document.querySelector('img')

let arr=['https://plus.unsplash.com/premium_photo-1700169563710-7c5d5bb92876?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1729218621503-b4a57a7ab7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1729434228800-846f37e3f13e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1729742200990-eca03d45ad73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1729731322066-183911deb95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
]


let i=0;

let time=  setInterval(()=>{
        image.setAttribute('src',arr[i])
        i=(i+1)%arr.length
    
        },2000)

setTimeout(()=>{
    clearInterval(time)
},15000)
