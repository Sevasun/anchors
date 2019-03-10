function Anchor(options) {
    this.selector = options.selector || '.anchor';
    this.duration = options.duration || 500;
    this.offset = options.offset || 0;

    if (typeof(this.offset) === 'string') {
        this.offset = document.querySelector(this.offset).offsetHeight;

        if (this.offset === undefined) {
            this.offset = 0;
        }
    }

    let anchors = document.querySelectorAll(this.selector);
    let body = document.querySelector('body');

    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', (e) => {
            e.preventDefault();
            let targetBlock = document.querySelector(anchors[i].getAttribute('href'));
            let targetPosition = targetBlock.getBoundingClientRect().top + pageYOffset;
            let offsetStep = parseInt(targetPosition/(this.duration/1000 * 60));

            console.log(targetPosition);
            
            // let animation = requestAnimationFrame(() => {
            //     let start = performance.now();
            //     if ()
            // });

            let scrollY = pageYOffset;
            
            if (scrollY < targetPosition - this.offset) {
                while (scrollY < targetPosition - this.offset) {
                    scrollY += offsetStep;
                    if (scrollY >= targetPosition - this.offset) {
                        scrollY = targetPosition - this.offset;
                    }
                    window.scrollTo({
                        top: scrollY,
                        behavior: 'smooth'
                    });
                }
            } else if (scrollY > targetPosition - this.offset) {
                while (scrollY > targetPosition - this.offset) {
                    scrollY -= offsetStep;
                    if (scrollY <= targetPosition - this.offset) {
                        scrollY = targetPosition - this.offset;
                    }
                    window.scrollTo({
                        top: scrollY,
                        behavior: 'smooth'
                    });
                }
            }
        })
    }
}

export default Anchor;