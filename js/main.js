var theButton = document.querySelector('#sendit');
var theData = document.querySelector('#inputData');

function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}

addEvent(theButton, 'click', function(){     
    parent.postMessage(theData.value, '*' );
});
