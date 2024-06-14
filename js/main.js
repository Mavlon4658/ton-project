let duckEl =document.querySelector('.home__animation')

if (duckEl) {
    let duck = bodymovin.loadAnimation({
        container: duckEl,
        renderer: 'svg',
        path: '../animation/duck_animation.json',
        loop: true,
        autoplay: true,
    })
    duck.setSpeed(0.5)
}