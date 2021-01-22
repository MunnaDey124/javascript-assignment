// https://github.com/MunnaDey124/javascript-assignment

// kilometerToMeter problem
function kilometerToMeter(kilometer){
    // kilometer to meter formula.
    var meter=kilometer*1000;
    // condition check vakue vaid or not.
    if(kilometer<0){
        return'Error!please enter the appropiate value';
    }
    return meter;
}

// budgetCalculator problem
function budgetCalculator(watch,phone,laptop){
    // given watch=10,phone=100,laptop=500 below show total budget.
    var total=10*watch+100*phone+500*laptop;
    // condition check number vaid or not.
    if(watch<0){
        return'error!please enter valid number'
    }
    else if(phone<0){
        return'error!please enter valid number'
    }
    else{
        if(laptop<0){
            return'error!please enter valid number'
        }
    }
    return total;
}
// hotelCost problem
function hotelCost(days){
    // initial cost 0.
    var cost=0;
    // condition check days are valid or not.
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
// megaFriend problem
function megaFriend(largestname){

    var name=largestname[0].length;
    var word=largestname[0];
    for(var i=1;i<largestname.length;i++){
        var element=largestname[i].length;
        // check condition 
        if(element>name){
            word=largestname[i];
            name=element;
        }
    }
    return word;
}
