const letter = 'ZAGD';

function alphabetClock(item){
    var letterString = letter.split('');
    
    //Clockwise alphabet
    var clockwise = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var alphabetClockwise = clockwise.split('');

    //Anticlockwise alphabet
    var anticlockwise = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';
    var alphabetAnticlockwise = anticlockwise.split('');

    //Need to change alphabet into numbers
    function convertLettersToNumbers(alpha){
        for(let letter =0; letter < alpha.length; letter++){
            var n = alpha.charCodeAt(0) - 65;
            return n
        }
    }

    var arrNumbers = [];
    for(let i=0; i<letterString.length;i++){
        var convertedToNumber = convertLettersToNumbers(letterString[i])+1;
        arrNumbers[i] = convertedToNumber
    }

    var totals =0;
    for(let i=0; i<arrNumbers.length;i++){
        var arrForwardNumber = [];
        var forwardNumber = 0;
        
        var arrBackwardNumber = [];
        var backwardNumber = 0;
        
        const arrToSum = [];
        var minimum;
        
        if(arrNumbers[i+1]!=null){
            forwardNumber = Math.abs(arrNumbers[i] - arrNumbers[i+1]); 
            backwardNumber = Math.abs((26-arrNumbers[i]) + arrNumbers[i+1]);
            minimum = Math.min(forwardNumber, backwardNumber);
        }else{
            minimum = 0
        }
        arrToSum[i]= minimum
        totals +=minimum
    }

    console.log(totals);
}
console.log(alphabetClock(letter));
//Returns 10 (correct answer)
//Still showing one undefined value after the final answer