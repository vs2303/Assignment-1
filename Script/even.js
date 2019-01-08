
function getNumbers()
{
    num=$("#num").val();
    var cnt=document.getElementById("cnt").value;

    if(num!="" && cnt!="" && cnt>0)
    {
        $(".calc").slideUp(500)
        $(".resulthead").text(cnt+" Even Number(s) After "+num+" Are Below")
        $(".result").slideDown("slow");
        document.getElementById("result").innerText=""
        var res=document.getElementById("result").innerText;
        var resBox=document.getElementById("result")
        if(num%2!=0)
        {
            num=num-1;
            for(var i=0;i<cnt;i++)
            {
                num=num+2;
                resBox.innerText=resBox.innerText +" "+num 
            }
        }
        else
        {
            for(var i=0;i<cnt;i++)
            {
                num=eval(num+"+2");
                resBox.innerText=resBox.innerText +"\t"+num
            }
        }
    }
    else
    {
        alert("PLEASE ENTER VALID NUMBERS!!!");
    }
    
}
function tryAgain(){
    $(".result").slideUp(500);
    $(".calc").toggle(500);
    $(".resulthead").text("Your Result Will Be Displayed Here!");
    $("#num").val("")
    $("#cnt").val("")
}


