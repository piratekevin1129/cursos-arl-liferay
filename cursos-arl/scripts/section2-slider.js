console.log("ready! seccion 2 - slider")

function clickNextPaginator(btn){
    var paginator_parent = btn.parentNode
    var pages_content = paginator_parent.getElementsByTagName('div')[0].getElementsByTagName('div')

    var wrap = document.getElementById(paginator_parent.getAttribute('wrap'))
    var actual_page = wrap.getAttribute('page')
    var total_pages = wrap.getAttribute('items')
    var seccion = parseInt(wrap.getAttribute('seccion'))
    var ancho = parseInt(wrap.getAttribute('ancho'))
    var espacio = parseInt(wrap.getAttribute('espacio'))

    var wrapper = document.getElementById(paginator_parent.getAttribute('wrapper'))

    if(actual_page<=(total_pages-seccion)){
        var wrapper_left = actual_page * (ancho + (espacio * 2))
        wrapper.style.left = (0-wrapper_left)+'px'

        actual_page++
        wrap.setAttribute('page',actual_page)

        for(var i = 0;i<pages_content.length;i++){
            pages_content[i].innerHTML = ''
        }
        pages_content[actual_page-1].innerHTML = '<span></span>'
    }

    var btn_next = (btn)
    var btn_prev = paginator_parent.getElementsByTagName('button')[0]

    if(actual_page==(total_pages-(seccion-1))){
        //llegó al final
        right_shadow.style.display = 'none'
        btn_next.className = 'seccion-2-paginator-btn-locked'
    }else{
        right_shadow.style.display = 'block'
    }
    if(actual_page>1){
        left_shadow.style.display = 'block'
        btn_prev.className = ''
    }else{
        left_shadow.style.display = 'none'
    }
}

function clickPrevPaginator(btn){
    var paginator_parent = btn.parentNode
    var pages_content = paginator_parent.getElementsByTagName('div')[0].getElementsByTagName('div')

    var wrap = document.getElementById(paginator_parent.getAttribute('wrap'))
    var actual_page = wrap.getAttribute('page')
    var total_pages = wrap.getAttribute('items')
    var seccion = parseInt(wrap.getAttribute('seccion'))
    var ancho = parseInt(wrap.getAttribute('ancho'))
    var espacio = parseInt(wrap.getAttribute('espacio'))

    var wrapper = document.getElementById(paginator_parent.getAttribute('wrapper'))

    if(actual_page>1){
        actual_page--
        wrap.setAttribute('page',actual_page)

        var wrapper_left = ((actual_page - 1) * (ancho + (espacio * 2)))
        wrapper.style.left = (0-wrapper_left)+'px'

        for(var i = 0;i<pages_content.length;i++){
            pages_content[i].innerHTML = ''
        }
        pages_content[actual_page-1].innerHTML = '<span></span>'
    }

    var btn_next = paginator_parent.getElementsByTagName('button')[1]
    var btn_prev = (btn)

    if(actual_page<(total_pages-(seccion-1))){
        right_shadow.style.display = 'block'
    }else{
        right_shadow.style.display = 'none'
    }

    if(actual_page==1){
        //llegó al inicio
        left_shadow.style.display = 'none'
        btn_prev.className = 'seccion-2-paginator-btn-locked'
    }else{
        left_shadow.style.display = 'block'
        btn_next.className = ''
    }

}

function setPagePaginator(){
    
}

function setSliderCursos(params){
    var wrap = document.getElementById(params.wrap)
    var wrap_width = 0
    var item_width = params.item_width
    var item_space = params.item_space
    var item_section = params.item_section
    var items_wrap = wrap.getElementsByClassName('seccion-2-item')

    wrap_width = (item_width * item_section) + (item_section * (item_space * 2))

    wrap.style.width = wrap_width+'px'
    wrap.setAttribute('items',items_wrap.length)
    wrap.setAttribute('ancho',item_width)
    wrap.setAttribute('seccion',item_section)
    wrap.setAttribute('espacio',item_space)
    
    for (i = 0;i<items_wrap.length;i++){
        items_wrap[i].style.width = item_width+'px'
        items_wrap[i].style.marginRight = item_space+'px'
        items_wrap[i].style.marginLeft = item_space+'px'
    }

    var limit_pages = (items_wrap.length - item_section) + 1
    for(i = 0;i<limit_pages;i++){
        var div_page = document.createElement('div')
        if(i==0){
            var div_span = document.createElement('span')
            div_page.appendChild(div_span)
        }
        document.getElementById(params.paginator).appendChild(div_page)
    }
}

setSliderCursos({
    wrap:'seccion-2-wrap',
    paginator:'seccion-2-paginator-pages',
    item_width:264,
    item_space:8,
    item_section:4
})
var left_shadow = document.getElementById('seccion-2-wrapper-leftshadow')
var right_shadow = document.getElementById('seccion-2-wrapper-rightshadow')