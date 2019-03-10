import merge from './modules/common';
// import FixedHeader from './modules/fixed';
import Anchor from './modules/anchor'
// init
document.addEventListener('DOMContentLoaded', function() {
	// let fixedHeader = new FixedHeader({
    //     simpleMode: false,
    //     target: '.header'
    // });
    let anchor = new Anchor({
        selector: '[data-anchor]',
        duration: 800,
        offset: '.header'
    });
});
