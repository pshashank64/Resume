var target = document.querySelectorAll("nav a");
var interval;
for(var i =0; i<target.length;i++){
    target[i].addEventListener("click", function(event){
        event.preventDefault();
        var targetid = this.textContent.trim().toLowerCase();
        var targetreach = document.getElementById(targetid);
        interval = setInterval(scrollv, 20, targetreach);
    });
}

function scrollv(targetreach){
    var coordinates = targetreach.getBoundingClientRect();
    if(coordinates.top<=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


var skillv = document.querySelectorAll(".skill-view > div");;
var skillVisible = document.getElementById("skill-container");

window.addEventListener("scroll", checkScroll);
var animdone = false;

function initbar(){
    for(let bar of skillv){
        bar.style.width = 0 + '%';
    }
}

initbar();

function fillbars(){
    for(let bar of skillv){
        let j = bar.getAttribute("data-width");
        let cur = 0;
        let f = setInterval(function(){
            if(cur>j){
                clearInterval(f);
                return;
            }
            cur++;
            bar.style.width = cur + '%';
        }, 10);
    }
}

function checkScroll(){
    var coord = skillVisible.getBoundingClientRect();
    if(!animdone && coord.top <= window.innerHeight){
        animdone = true;
        console.log("YES");
        fillbars();
    }
    else if(coord.top > window.innerHeight){
        animdone = false;
        initbar();
    }
}