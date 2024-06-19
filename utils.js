export function component(type, id, content, events={}){
    let el = document.createElement(type)
    el.id = id
    el.textContent = content

    for(const [fn, handle] of Object.entries(events)){
        el.addEventListener(fn, handle)
    }
    document.body.appendChild(el)
    return el
}
