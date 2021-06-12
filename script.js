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


var skillv = document.querySelectorAll(".skill-view > div");
//var skillVisible = document.getElementById("skill-container");


//var animdone = false;

function initbar(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 +"%";
}

for(var bar of skillv){
    initbar(bar);
}

//initbar();

function fillbars(bar){
    
        let j = bar.getAttribute("data-width");
        let cur = 0;
        let f = setInterval(function(){
            if(cur>=j){
                clearInterval(f);
                return;
            }
            cur++;
            bar.style.width = cur + '%';
        }, 10);
    
}

function checkScroll(){
    for(var bar of skillv){
        var coord = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && coord.top<=(window.innerHeight - coord.height)){
            bar.setAttribute("data-visited", true);
            //console.log("YES");
            fillbars(bar);
        }
        else if(coord.top > window.innerHeight){
            bar.setAttribute("data-visited", false);
            initbar(bar);
        }
    }
}

window.addEventListener("scroll", checkScroll);