const allSkeleton = document.querySelectorAll('.skeleton');

window.addEventListener('load',()=>{

    allSkeleton.forEach(item=>{
        setTimeout(()=>{
            item.classList.remove('skeleton')
        },5000)
    })
})