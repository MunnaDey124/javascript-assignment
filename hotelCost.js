function hotelCost(days){
    var cost=0;
    if(days<0){
        return'error!please enter valid days'
    }
    else if(days<=10){
        cost=days*100;
    }
    else if(days<=20){
        var firstpart=10*100;
        var remaining=days-10;
        var secondpart=remaining*80;
        cost=firstpart+secondpart;
    }
    else{
        var firstpart=10*100;
        var secondpart=10*80;
        var remaining=days-20;
        var thirdpart=remaining*50;
        cost=firstpart+secondpart+thirdpart;
    }
    return cost;
}
var result=hotelCost(10);
console.log(result);