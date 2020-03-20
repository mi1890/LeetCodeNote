/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s)
{
    if(s.length < 2)
    {
        return 0;
    }
    var valid = false;
    var ret = 0;
    var templen = 1;
    var leftcount = 0;

    var finish = false;
    var index = 0;
    var next_l = -1;
    var last_l = -1;
    while(!finish)
    {
        templen ++;
        if(s[index] == "(")
        {
            last_l = index;
            if(!valid)
            {
                valid = true;
                templen = 1;
                leftcount = 0;
                next_l = -1;
            }else
            {
                if(next_l == -1)
                {
                    next_l = index;
                }
            }
            leftcount++;
        }else if(s[index] == ")")
        {
            leftcount--;
            if(leftcount == 0 && index == s.length-1)
            {
                if(templen> ret)
                {
                    ret = templen;
                }
            }
            if(leftcount < 0)
            {
                leftcount = 0;
                if(valid)
                {
                    valid = false;
                    if(templen> ret)
                    {
                        ret = templen-1;
                    }
                    if(next_l > 0)
                    {
                        index = next_l;
                        continue;
                    }
                }
            }
           
        }
        index++;
        if(index == s.length)
        {
            if(next_l != -1 && last_l != next_l)
            {
                index = last_l;
                valid = false;
                continue;
            }
            finish = true;
        }
    }
    return ret;
};


console.log(longestValidParentheses("(()()"));