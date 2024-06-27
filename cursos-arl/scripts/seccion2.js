function clickNextPaginator(btn){
    var paginator_parent = btn.parentNode
    var pages_content = paginator_parent.getElementsByTagName('div')[0].getElementsByTagName('div')

    var wrap = document.getElementById(paginator_parent.getAttribute('wrap'))
    var actual_page = wrap.getAttribute('page')
    var total_pages = wrap.getAttribute('items')
    var seccion_page = wrap.getAttribute('seccion')
    var ancho_page = wrap.getAttribute('ancho')
    var wrapper = document.getElementById(paginator_parent.getAttribute('wrapper'))

    if(actual_page<=(total_pages-seccion_page)){
        var wrapper_left = (actual_page*ancho_page) + (actual_page*15)
        wrapper.style.left = (0-wrapper_left)+'px'

        actual_page++
        wrap.setAttribute('page',actual_page)

        for(var i = 0;i<pages_content.length;i++){
            pages_content[i].innerHTML = ''
        }
        pages_content[actual_page-1].innerHTML = '<span></span>'
    }


    if(actual_page==(total_pages-(seccion_page-1))){
        right_shadow.style.display = 'none'
    }else{
        right_shadow.style.display = 'block'
    }
    if(actual_page>1){
        left_shadow.style.display = 'block'
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
    var seccion_page = wrap.getAttribute('seccion')
    var ancho_page = wrap.getAttribute('ancho')
    var wrapper = document.getElementById(paginator_parent.getAttribute('wrapper'))

    if(actual_page>1){
        actual_page--
        wrap.setAttribute('page',actual_page)

        var wrapper_left = ((actual_page-1)*ancho_page) + ((actual_page-1)*15)
        wrapper.style.left = (0-wrapper_left)+'px'

        for(var i = 0;i<pages_content.length;i++){
            pages_content[i].innerHTML = ''
        }
        pages_content[actual_page-1].innerHTML = '<span></span>'
    }

    if(actual_page<(total_pages-(seccion_page-1))){
        right_shadow.style.display = 'block'
    }else{
        right_shadow.style.display = 'none'
    }

    if(actual_page==1){
        left_shadow.style.display = 'none'
    }else{
        left_shadow.style.display = 'block'
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

    wrap_width = (item_width * item_section) + ((item_section-1) * item_space)

    wrap.style.width = wrap_width+'px'
    wrap.setAttribute('items',items_wrap.length)
    wrap.setAttribute('ancho',item_width)
    wrap.setAttribute('seccion',item_section)
    
    for (i = 0;i<items_wrap.length;i++){
        items_wrap[i].style.width = item_width+'px'
        if(i<(items_wrap.length-1)){
            items_wrap[i].style.marginRight = item_space+'px'
        }

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
    item_space:15,
    item_section:4
})
var left_shadow = document.getElementById('seccion-2-wrapper-leftshadow')
var right_shadow = document.getElementById('seccion-2-wrapper-rightshadow')