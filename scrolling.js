let bottom = false;
let scrollMsg = document.querySelector('div#project-footer')

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        scrollMsg.style.display = 'none';
        bottom=true;
    }
    else if(bottom == true){
        scrollMsg.style.display = 'block';
        bottom = false;
    }
};