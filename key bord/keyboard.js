var disp = document.getElementById("display");
    function appendtodisplay(value){
        disp.value += value;
    }
    function cleardisplay(){
        disp.value="";
    }
    function calculate(){
        var equation = disp.value;
        try{
            disp.value = eval(equation);
        }
        catch(e){
            disp.value = e;
        }
        
    }
function clr()
{
    disp.value = disp.value.slice(0,-1);
}
const body = document.getElementsByTagName('body')[0];
            document.write(body);
            function flip(){
                var color = 'rgb('+ Math.random()*255 +','+Math.random()*255 + ',' +Math.random()*255+ ')';
                body.style.backgroundColor = color;
            } 
