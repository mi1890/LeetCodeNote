// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
var f = function(p,i,s,j,result)
{
    if(p[i] == "*")
    {
        var m_ij = p[i-1] == s[j] || p[i-1] == ".";
        return result[i-2][j] |result[i-1][j] |result[i][j-1] & m_ij
    }else
    {
        var m_ij = p[i] == String[j] || p[i] == ".";
        return result[i-1][j-1] & m_ij
    }
}
var isMatch = function(s, p) 
{
    len_s = s.length + 1;
    len_p = p.length + 1;
    var ret = new Array();
    for(var i = 0 ; i < len_p;i++)
    {
        var arr = new Array();
        ret.push(arr);
        for(var j = 0 ; j < len_s ;j++)
        {
            arr.push(false);
        }
    }
    ret[0][0] = true;
    p = "_"+p;
    s = "_"+s;

    if(len_s == len_p == 1)
    {
        return true;
    }
    if(len_p == 1)
    {
        return false;
    }
    if(p[0] == "*")
    {
        return false;
    }

    for(var i = 1 ; i < len_p ; i++)
    {
        if(p[i] == "*")
        {
            console.log(i);
            ret[i][0] = result[i-2][0]
        }

        for(var j = 1 ; j < len_s ; j++)
        {
            ret[i][j] = f(p,i,s,j,ret)
        }

    }
    return ret[len_s]
}

function main()
{
    console.log(isMatch("abcddd",".*"));
    console.log("正则表达式匹配");
}
main();

// var isMatch = function(s, p) 
// {
//     var contextindex = 0;
//     var content = String(s);
//     var state = 0;//0 single,1 match,2char
//     var recordChar = "";
//     var reg = String(p);
//     for(var i = 0; i < reg.length;i++)
//     {
//         if(reg[i] == ".")
//         {
//             recordChar = "";
//             state = 0;
//         }else if(reg[i] == "*")
//         {
//             state = 1;
//         }else
//         {
//             state = 2;
//             recordChar = reg[i];
//         }
//         for(var j = contextindex ; j < content.length ;j++)
//         {
//             if(state == 0)
//             {
//                 contextindex  = j+1;
//                 break;
//             }else if(state == 1)
//             {
//                 if(content[j] == recordChar ||recordChar == "")//TODO:
//                 {
//                     contextindex  = j+1;
//                     continue;
//                 }
//             }else if(state ==2)
//             {

//             }
//         }
//     }

//     return false;
// };
