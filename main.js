var child = document.querySelector(".child")

var CenterX = window.innerWidth/2
var CenterY = window.innerHeight/2
// var CenterX = 640
// var CenterY = 315

addEventListener("mousemove", function(e){
    if(e.target.tagName != 'DIV'){
        if(e.clientX <= CenterX){
            if(e.clientY <= CenterY){
                // nahie 2 mokhtasat
                var ClientX = e.clientX
                var ClientY = e.clientY

                var X = ClientX - CenterX
                var Y = CenterY - ClientY
                
                var teta = Math.atan(Y/X)
                teta = teta * 180 / Math.PI
                teta = 180 - Math.abs(teta)
                console.log(teta)
                child.style.transform = `rotate(${-teta}deg)`
            }else{
                // nahie 3 mokhtasat
                var ClientX = e.clientX
                var ClientY = e.clientY

                var X = ClientX - CenterX
                var Y = CenterY - ClientY
                
                var teta = Math.atan(Y/X)
                teta = teta * 180 / Math.PI
                teta = 180 + Math.abs(teta)
                console.log(teta)
                child.style.transform = `rotate(${-teta}deg)`
            }
        }else{
            // nahie 1 , 4 mokhtasat
            var ClientX = e.clientX
            var ClientY = e.clientY

            var X = ClientX - CenterX
            var Y = CenterY - ClientY
            
            var teta = Math.atan(Y/X)
            teta = teta * 180 / Math.PI
            console.log(teta)
            child.style.transform = `rotate(${-teta}deg)`
        }
    }
})