function generaterandomnumber(){
    console.log(Math.floor(Math.random()*100)+1);
}
function ctof(c){
    return (c*9)/5+32;
}

module.exports={generaterandomnumber,ctof};
