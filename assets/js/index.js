let m = new k.create.handler.class()
m.element = k.get(document,".wow")[0]
m.add("reee")
var par = function(){
    var canvas = k.get(document,"canvas")[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width;
        var h = canvas.height;
        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
        ctx.lineWidth = Math.floor(Math.random()*1)+1;
        ctx.lineCap = 'round';
        var init = [];
        var maxParts = 100;
        for (var a = 0; a < maxParts; a++) {
            init.push({
                x: Math.random() * w,
                y: Math.random() * h,
                l: Math.random() * 1,
                xs: -4 + Math.random() * 4 + 2,
                ys: Math.random() * 10 + 10
            })
        }
        var particles = [];
        for (var b = 0; b < maxParts; b++) {
            particles[b] = init[b];
        }
        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (var c = 0; c < particles.length; c++) {
                var p = particles[c];
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                ctx.stroke();
            }
            move();
        }
        function move() {
            for (var b = 0; b < particles.length; b++) {
                var p = particles[b];
                p.x -= p.xs;
                p.y -= p.ys;
                if (p.x > w || p.y < 0) {
                    p.x = Math.random() * w;
                    p.y = h + 20;
                }
            }
        }
        setInterval(draw, 30);
    }
}
var display = function(){
    let m = new k.create.handler.class(k.get(document,".Join-discord-wrapper")[0])
    if(document.body.scrollTop<80){
        m.element = k.get(document,".Join-discord-wrapper")[0]
        if(m.has("Join-discord-move-out") && !m.has("Join-discord-open")){
            m.remove("Join-discord-move-out")
        }
    }else{
        let a = k.get(document,".footer")[0]
        if(window.innerHeight-a.getBoundingClientRect().y>m.element.getBoundingClientRect.height){
            m.element = k.get(document,".Join-discord")[0]
            m.add("posre")
        }else{
            m.element = k.get(document,".Join-discord")[0]
            m.remove("posre")
        }
        if(window.innerWidth>=1024){
            m.element = k.get(document,".Join-discord-wrapper")[0]
            m.add("Join-discord-move-out")
        }
    }
    k.forMe(k.get(document,".section-text-small-wrapper"),function(a){
        if((-(window.innerHeight-a.getBoundingClientRect().y)*100/document.body.scrollTop)>-80){
            a.children[0].style.transform = "translateY("+((-(window.innerHeight-a.getBoundingClientRect().y)*100/document.body.scrollTop))+"px)";
        }else{
            a.children[0].style.transform = "translateY(-80px)";
        }
    })
    k.forMe(k.get(document,".section-wrapper-slide-up"),function(a){
        let m = new k.create.handler.class(a)
        if(window.innerHeight+document.body.scrollTop>window.innerHeight+document.body.scrollTop-(window.innerHeight-a.getBoundingClientRect().y)+100){
            m.add("section-wrapper-slide-up-run")
        }else if(window.innerHeight+document.body.scrollTop<window.innerHeight+document.body.scrollTop-(window.innerHeight-a.getBoundingClientRect().y)){
            if(m.has("section-wrapper-slide-up-run")){
                m.remove("section-wrapper-slide-up-run")
            }
        }
    })
    k.forMe(k.get(document,".section-wrapper-text-display"),function(a){
        if(window.innerHeight+document.body.scrollTop>window.innerHeight+document.body.scrollTop-(window.innerHeight-a.getBoundingClientRect().y)-100){
            animatext(a,"testtosgjwpogospie")
        }else if(window.innerHeight+document.body.scrollTop<window.innerHeight+document.body.scrollTop-(window.innerHeight-a.getBoundingClientRect().y)){
            a.innerHTML = ""
        }
    })
}
var device = function(m){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        k.forMe(k.get(document,".moving-by-mouse"),function(a){
            m.element = a
            m.remove("moving-by-mouse")
            m.element = k.get(document,".wow")[0]
            m.add("reee")
        })
        m.element = document.body
        m.add("mobile")
    }else{
        m.element = document.body
        m.remove("mobile")
    }
}
var reverse = function(a){
    return a.split("").reverse().join("")
}
var animatext = function(e,t){
    let w="",i=0,u="";
    let x = setInterval(function(){
        u+=t[i]
        if(i%1==0){
            e.innerHTML = w + reverse(u)
            w=w.slice(0,w.length-0)+u
            u=""
        }else{
            w+=t[i]
            e.innerHTML = w
        }
        i++;
        if(i>=t.length){
            e.innerHTML = w
            clearInterval(x)
        }
    },34)
}
par()
let o = new k.events()
let mousesave = [0,0]
o.add(
    k.create.window("resize",function(){
        let m = new k.create.handler.class(k.get(document,".Join-discord-button-logo")[0])
        if(window.outerWidth>1024){
            m.remove("none")
        }
    }),
    k.create.listener("body","scroll",function(){
        k.forMe(k.get(document,".moving-by-mouse"),function(a){
            a.style.transform = "translateX("+((mousesave[0]-(a.getBoundingClientRect().x+a.getBoundingClientRect().width/2))/10)+"px) translateY("+((mousesave[1]-(a.getBoundingClientRect().y+a.getBoundingClientRect().height/2))/10)+"px)"
        })
        display()
    }),
    k.create.window("mousemove",function(e){
        mousesave = [e.clientX,e.clientY]
        k.forMe(k.get(document,".moving-by-mouse"),function(a){
            a.style.transform = "translateX("+((mousesave[0]-(a.getBoundingClientRect().x+a.getBoundingClientRect().width/2))/10)+"px) translateY("+((mousesave[1]-(a.getBoundingClientRect().y+a.getBoundingClientRect().height/2))/10)+"px)"
        })
    }),
    k.create.listener("[data-link]","click",function(e,a){
        window.open(k.attr(a,"data-link"));
    }),
    k.create.listener(".bar-button","click",function(e,a){
        let m = new k.create.handler.class(a)
        if(m.has("bar-mobile-button-open")){
            m.element=k.get(document,".bar-mobile")[0]
            m.remove("bar-close")
            m.element=k.get(document,".menu")[0]
            m.add("white05")
        }
        if(m.has("bar-mobile-button-close")){
            m.element=k.get(document,".bar-mobile")[0]
            m.add("bar-close")
            m.element=k.get(document,".menu")[0]
            m.remove("white05")
        }
    }),
    k.create.event("move-left-section","click",function(){
        let m = new k.create.handler.class(k.get(document,".skyblockcatia-display")[0])
        m.remove("section-all-move-right")
        if(window.outerWidth<1024){
            document.body.scrollTo(0, 870);
        }else{
            document.body.scrollTo(0, 630);
        }
        setTimeout(function(){
            animatext(k.get(document,".skyblockcatia-name-display")[0],"SKYBLOCKCATIA")
        },400)
    }),
    k.create.event("sbcatia-close","click",function(){
        let m = new k.create.handler.class(k.get(document,".skyblockcatia-display")[0])
        m.add("section-all-move-right")
        if(window.outerWidth<1024){
            document.body.scrollTo(0, 900);
        }else{
            document.body.scrollTo(0, 670);
        }
        setTimeout(function(){
            k.get(document,".skyblockcatia-name-display")[0].innerHTML = "<br>"
        },300)
    }),
    k.create.event("button-donation","click",function(e,a){
        let m = new k.create.handler.class()
        let q = "."+k.attr(a,"to")
        m.element = k.get(document,q)[0]
        if(m.has("hind")){
            k.forMe(k.get(document,".banner-inner"),function(a){
                m.element = a
                m.add("hind")
            })
            m.element = k.get(document,q)[0]
            m.remove("hind")
            k.get(document,q.split("-")[0]+"-name-display")[0].innerHTML = "<br>"
            setTimeout(function(){
                animatext(k.get(document,q.split("-")[0]+"-name-display")[0],k.attr(k.get(document,q.split("-")[0]+"-name-display")[0],"text"))
            },300)
        }else{
            m.add("hind")
        }
    }),
    k.create.listener(".link","click",function(e,a){
        window.open(k.attr(a,"href"))
    }),
    k.create.listener("img","mousedown",function(e){
        e.preventDefault()
    }),
    k.create.data("vdo","click",function(e,a){
        let m = new k.create.handler.class()
        m.element = k.get(document,".vdo-wrapper")[0]
        m.remove("none")
        k.get(document,"iframe")[0].src = "https://www.youtube.com/embed/"+k.attr(a,"data-vdo")+"?autoplay=1&mute=0&rel=0&modestbranding=1"
    }),
    k.create.event("vdo-close","click",function(e,a){
        let m = new k.create.handler.class()
        m.element = k.get(document,".vdo-wrapper")[0]
        m.add("none")
        k.get(document,"iframe")[0].src =""
    }),
    k.create.window("load",function(){
        let m = new k.create.handler.class(k.get(document,".Join-discord-button-logo")[0])
        if(window.outerWidth<1024){
            m.add("none")
        }
        k.get(document,'[event="button-donation"]')[0].click()
        device(m)
        display()
    })
)
o.run()