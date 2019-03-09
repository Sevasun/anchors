function Anchor(options) {
    this.selector = options.selector || '.anchor';
    this.duration = options.duration || 500;

    let anchors = document.querySelectorAll(this.selector);
    console.log(anchors);

    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', (e) => {
            e.preventDefault();
            let offset;
            let targetBlock = document.querySelector(anchors[i].getAttribute('href'));
            console.log(targetBlock.getBoundingClientRect().top/this.duration * 60);
        })
    }
}

export default Anchor;