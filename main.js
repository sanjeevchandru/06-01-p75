document.write("39.to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80."+"<br>");
function test39(x,y){
    var s=x+y;
    if(s>=50 && s<=80){
        return 65;
    }
    return 80;
}
document.write("The numbers are :20,40  ,ans :"+test39(20,40)+"<br>");
document.write("The numbers are :50,40  ,ans :"+test39(50,40)+"<br><br>");