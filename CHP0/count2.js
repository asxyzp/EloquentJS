//Program to count from 0 to 10
//Created by asxyzp
/*
    Function : sum(arr)
    Functionality : Returns the sum of array, which is sent as the input
    Parameter : arr - Array containing integers
    Return : sumArr - Sum of integers contained in the array arr
*/
function sum(arr)
{
    var sumArr = 0;
    for(var i=0;i<arr.length;i++)
        sumArr += i;
    return sumArr;
}

/*
    Function : range(beginInt, endInt)
    Functionality : Creates an array with elements, beginInt, beginInt+1, beginInt+2, .... ,endInt-1
    Parameter : beginInt - Beginner Int
                endInt - Ending Int | beginInt < endInt
    Return value : [beginInt, beginInt+1, beginInt+2, .... ,endInt-1]
*/
function range(beginInt,endInt)
{
    var arr = [];
    if(beginInt<=endInt)
    {
        for(var i=beginInt;i<=endInt;i++)
        {
            arr.push(i);
        }
        return arr;
    }
    return [];
}

console.log(sum(range(0,10)));