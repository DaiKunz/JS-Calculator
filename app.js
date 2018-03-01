$(function() {
    var current
    var screen
    var output
    var limit
    var zero
    var operator

    //screen = document.getElementById("result")
    screen = $("#result")[0]
    //var element = document.querySelector(".num")
    var element = $(".num")
    var len = element.length
        for(var i = 0; i<len; i++) {
            element[i].addEventListener("click", function(){
                if(limit > 10) {
                    alert("Your number is too big.")
                } else{
                    num = this.value
                    output = screen.innerHTML += num
                    limit = output.length
                }
            }, false)
        }

        //var elem1 = document.querySelectorAll(".operator")
        var element1 = $(".operator")
        var len1 = element1.length
        for(var i = 0; i<len1; i++) {
            element1[i].addEventListener("click", function() {
                operator = this.value
                if(screen.innerHTML === "") {
                    screen.innerHTML = screen.innerHTML.concat("")
                }else if(output) {
                    screen.innerHTML = output.concat(operator)
                }
            }, false)
        }

        //document.querySelector("#delete").addEventListener("click", function() {
            //$("#delete")[0].addEventListener("click", function() {
            $("#delete").click(function() {
            screen.innerHTML = ""
            limit = 0
        })

        //document.querySelector("#equals").addEventListener("click", function() {
            $("#equals").click(function() {
            if(screen.innerHTML === output) {
                screen.innerHTML = eval(output)
            }
            else {
                screen.innerHTML = ""
            }
        })

        $(".zero").click(function(){
            zero = this.value
            if(screen.innerHTML === ""){
                output = screen.innerHTML = zero
            }
            else if(screen.innerHTML === output) {
                output = screen.innerHTML += zero
            }
        })

    })