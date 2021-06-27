

export function On() {
    var o = document.getElementById('switch')
    o = o.getElementsByTagName('section')
    var ok = false
    for (var i = 0; i < o.length; i++) {
        if (o[i].className == 'on') {
            o[i].className = 'off'
            if (o[i + 1]) {
                o[i + 1].className = 'on'
                ok = true
            }
            break
        }
    }
    if (!ok) {
        o[0].className = 'on'
    }
}