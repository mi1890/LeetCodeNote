
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) 
{
    
    var ret = 0;
    var reverse = x < 0;
    var temp = Math.abs(x);
    var array = new Array();
    while(temp >= 10)
    {
        var value = temp%10;
        array.push(value);
        temp = Math.floor(temp/10);
    }
    array.push(temp);
    for(var i = 0 ; i < array.length ;i++)
    {
        ret += Math.pow(10,array.length-i -1)*array[i];
    }
    ret = ret*(reverse?-1:1);
    var max = (Math.pow(2,31)-1);
    var min = Math.pow(-2,31)
    if(ret > max || ret < min )
    {
        return 0;
    }
    return ret;
};

function main()
{
    console.log(reverse(1534236469));
    console.log("整数反转");
}
main();