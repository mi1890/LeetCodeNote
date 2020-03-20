var longestCommonPrefix = function(strs) 
{
    var ret = "";
    if(strs.length == 0)
    {
        return ret;
    }
    var finish = false;
    for(var i = 0 ; i < strs[0].length ; i++)
    {
        var same = true;
        for(var j = 1; j < strs.length;j++)
        {
            if(strs[j].length > i)
            {
                if(strs[j][i] != strs[0][i])
                {
                    same = false;
                    finish= true;
                    break;
                }
            }else
            {
                same = false;
                finish = true;
                break;
            }
        }
        if(same)
        {
            ret = ret + strs[0][i];
        }
        if(finish)
        {
            break;
        }
    }
    return ret;
};


function main()
{
    console.log(longestCommonPrefix("aa","a"));
    console.log("最长公共前缀");
}
main();