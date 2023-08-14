
let element = document.querySelectorAll('.elem')

element.forEach(function(item){
    item.addEventListener('click',function(dets){
        let color = dets.target.id
        document.querySelector('body').style.backgroundColor = color

    })
})