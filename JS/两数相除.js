/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor)
{
    if(dividend == 0)
    {
        return 0;
    }
    var max = Math.pow(2,31)-1;
    var min = Math.pow(-2,31);
    if(divisor == 1)
    {
        return  clamp(dividend,min,max);
    }
    if(divisor == -1)
    {
        return clamp(-1*dividend,min,max);
    }
    var inverse = -1;
    if(dividend > 0 && divisor > 0)
    {   
        inverse = 1;
    }else if(dividend < 0 && divisor < 0)
    {
        inverse = 1;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    var ret = 0;
    while(dividend >= divisor)
    {
        dividend = dividend - divisor;
        ret++;
    }
    return clamp(ret*inverse,min,max);
};

function clamp(value,min,max)
{
    if(value < min)
    {
        return min;
    }
    if(value > max)
    {
        return max;
    }
    return value;
}

console.log(divide(-2147483648
    ,-1));