var a = [1,3,5,7,9,10,5,7,8,20];
var sum=0;
for(var i=0; i<a.length; i++){
    sum += a[i];
}

if(sum > 0 && sum <=70){
    console.log("D grade");
}
else if(sum > 71 && sum <=79){
    console.log("C grade");
}
else if(sum > 81 && sum <=89){
    console.log("B grade");
}
else if(sum > 91 && sum <=100){
    console.log("A grade");
}
