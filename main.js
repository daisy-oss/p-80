var guest_1_array=[];
function submit(){
for(var j=1;j<=4; j++){
    var Guest1=document.getElementById("Guest_"+j).value;
    console.log(Guest1);
    guest_1_array.push(Guest1);

}

//for(var k=0<Guest1; k++)
//{
    document.getElementById("display_name").innerHTML=guest_1_array;
    console.log(display_guest_1_array);
    
}
function sorting(){
    guest_1_array.sort();
    document.getElementById("display_name2").innerHTML=guest_1_array;
    console.log(display_guest_1_array);
}