/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) 
{
    var n_length = needle.length;
    if(n_length == 0)
    {
        return 0;
    }
    for(var i = 0 ; i< haystack.length - n_length + 1; i++)
    {
        if(haystack[i] == needle[0])
        {
            if(haystack.substr(i,n_length) == needle)
            {
                return i;
            }
        }
    }

    return -1;
};

console.log(strStr("hello","lo"));