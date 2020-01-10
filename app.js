document.addEventListener('DOMContentLoaded', () => {

    let lessBtns = document.querySelectorAll('.arrow-less')
    let moreBtns = document.querySelectorAll('.arrow-more')


    for( let btn of lessBtns ){
        btn.addEventListener('click', () => {

            if( btn.parentNode.firstChild.nextSibling.value > 0 ){
                btn.parentNode.firstChild.nextSibling.value--
            }
        })
    }

    for( let btn of moreBtns ){
        btn.addEventListener('click', () => {
            btn.parentNode.firstChild.nextSibling.value++
        })
    }
})