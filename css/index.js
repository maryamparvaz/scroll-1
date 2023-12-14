 _main = document.getElementsByTagName('main')[0]
        let _h2 = document.querySelectorAll('#txt>h2')
        let wall = document.getElementById('wall')
        let fig = document.querySelector('#fig>img')
        const pic = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        let page2 = document.getElementById('page2')
_main.addEventListener('scroll', (e) => {
        let st = e.target.scrollTop
        document.getElementsByTagName('span')[0].innerHTML = st
        _h2[0].style.left = (st / 3) + 'px'
        _h2[1].style.right = (st / 3) + 'px'
        _h2[2].style.left = (st / 3) + 'px'
        _h2[3].style.right = (st / 3) + 'px'
        wall.style.left = -(st) + 'px'
        if (st < 400) {
                fig.src = 'img/' + pic[2]
        } else if (st > 400 && st < 700) {
                fig.src = 'img/' + pic[0]
        }
        else if (st > 700 && st < 1100) {
                fig.src = 'img/' + pic[1]
        } else if (st > 1100) {
                fig.src = 'img/' + pic[3]
        }
        page2.style.right = (st - (wall.clientWidth) - 500) + 'px'
})