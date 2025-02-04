document.write("hiiiiiii")
$(document).ready(function(){
    $("#demo").click(function(){
        $("#intro").hide(1000);
    });
    $("#show").click(function(){
        $("#intro").show(2000);
    });
});


$(document).ready(function(){
    $("#para2").dblclick(function(){
        $(this).hide();
    });
});


$(document).ready(function(){
    $("#para3").mouseenter(function(){
        alert("You have enetered in the alery zone.");
    });
});


$(document).ready(function(){
    $("#para4").mouseleave(function(){
        prompt("Give your name: ");
    });
});


$(document).ready(function(){
    $("#name").focus(function(){
        $(this).css("background-color","pink")
    });
    $("#name").blur(function(){
       $(this).css("background-color","yellow")
    });
});

$(document).ready(function(){
    $("#toggle").click(function(){
        $("#toggleDiv").toggle();
    });
});

$(document).ready(function(){
    $("#css").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(4000);
    });
});

$(document).ready(function(){
    $("#fadeTo").click(function(){
        $("#div4").fadeTo("slow",0.3);
        $("#div5").fadeTo("slow",0.6);
        $("#div6").fadeTo("slow",0.9);
    });
});

$(document).ready(function(){
    $("#slide").click(function(){
        $("#slideDiv").slideToggle();
    });
});

$(document).ready(function(){
    $("#animation").click(function(){
        $("#div7").animate({left:'300px'},"slow")
    });
});

$(document).ready(function(){
    $("#ani1").click(function(){
        $("#div8").animate({height:'toggle',opacity:0.2},"slow")
    });
});

$(document).ready(function(){
    $("#ani2").click(function(){
        var div=$("#div9");
        div.animate({height:'300px',oparcity:0.2},"slow"),
        div.animate({width:'300px',opacity:0.8},"slow"),
        div.animate({height:'500px',opacity:0.4},"slow"),
        div.animate({width:'100px',opacity:1},"slow")
    });
});

$(document).ready(function(){
    $("#ani3").click(function(){
        $("#div10").animate({left:'150px',width:'300px', fontSize:'3rem',opacity:0.7})
    });
});

$(document).ready(function(){
    $("#div11").click(function(){
        $("#div12").slideDown(6000);
    });
   $("#stop").click(function(){
    $("#div12").stop();
   })
});

$(document).ready(function(){
    $("#div13").click(function(){
        $(this).hide("slow",function(){
            alert("Its done.......")
        });
    });
});

$(document).ready(function(){
    $("#fun").click(function(){
        $("#chain").css("color","red").slideUp(2000).slideDown(2000);
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#text").click(function(){       
        alert("Text:"+$("#test").text());
    });
    $("#html").click(function(){     
        alert("HTML:"+$("#test").html());
    });
});


$(document).ready(function(){
    $("#mickey").click(function(){
        alert("Value: "+$("#value").val());
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#text1").click(function(){
        $("#p1").text("Helloooooooooo");
    });
});

$(document).ready(function(){
    $("#html1").click(function(){
        $("#p2").html("<b>Helloo</b> <i>World</i>");
    });
});

$(document).ready(function(){
    $("#input1").click(function(){
        $("#cartoon").val("Doremon");
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#w3schools").click(function(){
        $("#link").attr("href","https://www.w3schools.com/jquery/jquery_dom_set.asp");
    });
});

$(document).ready(function(){
    $("#btn").click(function(){
        $("#link1").attr({
            "href":"https://www.w3schools.com/jquery/jquery_dom_set.asp",
            "title":"Jquery tutorial"
        })
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#app").click(function(){
        $("#append").append("<b>Appended text.</b>")
    });
});

$(document).ready(function(){
    $("#pre").click(function(){
        $("#prepend").prepend("<i>Prepended Text.</i>")
    });
});

$(document).ready(function(){
    $("#before").click(function(){
        $("#img").before("<b>Before</b>");
    });
});

$(document).ready(function(){
    $("#after").click(function(){
        $("#img").after("<i>After</i>");
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#rem").click(function(){
        $("#remove").remove();
    });
});


$(document).ready(function(){
    $("#empty").click(function(){
        $("#emp").empty()
    })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $("#addC").click(function(){
        $("h1,h2").addClass("pink");
        $("#unique").addClass("important")
    })
})

$(document).ready(function(){
    $("#removeC").click(function(){
        $("h1,h2").removeClass("pink");
        $("#unique").removeClass("important")
    })
})

$(document).ready(function(){
    $("#toggleC").click(function(){
        $("h1").each(function(){
            if($(this).hasClass("pink"))
            {
                $(this).removeClass("pink").addClass("green")
            }
            else{
                $(this).removeClass("green").addClass("pink")
            }
        });

        $("#unique").toggleClass("important")
    });
});
    
$(document).ready(function(){
    $("#btn1").click(function(){
        $("ul").each(function(){
            $("li:first").first().remove();
        })
    })
})