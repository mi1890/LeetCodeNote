/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) 
{
    if(x ==0)
    {
        return true;
    }
    if(x < 0)
    {
        return false;
    }
    var bit = Math.log10(x);
    if(bit == 1)
    {
        return Math.floor(bit/10) == bit%10;
    }
    var bit = Math.floor(bit);
    var loop = Math.ceil(bit/2);
    for(var i = 0 ; i <loop; i++)
    {
        var tempvalue = Math.floor(x/Math.pow(10,i));
        var value =  tempvalue%10;

        var tempvalue2 = Math.floor(x/Math.pow(10,bit-i));
        var value2 = tempvalue2%10;
        if(value !=  value2)
        {
            return false;
        }

    }
    return true;
};

function main()
{
    console.log(isPalindrome(1000030001));
    console.log("回文数");
}
main();
