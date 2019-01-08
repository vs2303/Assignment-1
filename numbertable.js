$(document).ready(function(){
    for(var i=1;i<=10;i++)
    {
        $("table").append('<tr id="tr'+i+'"></tr>')
        for(var j=0;j<10;j++)
        {
            var num=(j*10)+i;
            $("#tr"+i).append('<td>'+num+'</td>');
        }
    }

    $("td").mouseenter(function(){
        $(this).addClass("anim");
    });
    $("td").mouseleave(function(){
        $(this).removeClass("anim")
    });

});