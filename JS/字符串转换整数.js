var myAtoi = function(str) 
{
    var ret = 0;
    var tempstr = String(str);
    var charcodemin = '0'.charCodeAt(0);
    var charcodemax = '9'.charCodeAt(0);

    var temparray = new Array();
    var reversenum = false;
    var checkstart= false;
    var numberstart = false;
    for(var i = 0 ; i < tempstr.length ;i++)
    {
        var char = tempstr.charCodeAt(i);
        if(!checkstart)
        {
            if(tempstr[i] == " ")
            {
                continue;
            }
            else if(tempstr[i] == "-")
            {
                checkstart = true;
                reversenum = true;
                continue;
            }
            else if(tempstr[i] == "+")
            {
                checkstart = true;
                continue;
            }
            else if(char < charcodemin || char > charcodemax )
            {
                return ret;
            }else
            {
                checkstart = true;
            }
        }
        if(checkstart)
        {
            if(!numberstart)
            {
                if(char == charcodemin)
                {
                    continue;
                }else
                {
                    numberstart = true;
                }
            }
            if(numberstart)
            {
                numberstart = true;
                if(char >= charcodemin && char <= charcodemax )
                {
                    temparray.push(char - charcodemin);
                }else
                {
                    break;
                }
            }
        }
    }
    for(var i = 0 ; i < temparray.length ;i++)
    {
        ret += temparray[i]*Math.pow(10,temparray.length-i-1);
    }

    if(reversenum)
    {
        ret = ret*-1;
    }
    var max = (Math.pow(2,31)-1);
    var min = Math.pow(-2,31)
    if(ret > max)
    {
        return max;
    }
    if( ret < min )
    {
        return min;
    }
    return ret;
};


function main()
{
    console.log(myAtoi("010"));
    console.log("字符串转换整数");
}
main();



// for(var i = 0 ; i < tempstr.length ;i++)
//     {
//         if(tempstr[i] == "-")
//         {
//             reverseindex = i;
//         }
//         var char = tempstr.charCodeAt(i);
//         if(char < charcodemin || char > charcodemax )
//         {
//             if( tempstr[i] != " " && tempstr[i] != "-" && tempstr[i] != "+")
//             {
//                 break;
//             }
//             if(tempstr[i] == "-" || tempstr[i] == "+")
//             {
//                 if(startindex + 1 == i)
//                 {
//                     break;
//                 }
//                 startindex = i;
//             }
//         }
//         if(char >= charcodemin && char <= charcodemax)
//         {
//             if(reverseindex == i-1 && numberindex == -1)
//             {
//                 reversenum = true;
//             }
//             if(numberindex == -1)
//             {
//                 if(char == charcodemin)
//                 {
//                     continue;
//                 }
//             }
//             numberindex = i;
//             ret += (char - charcodemin)*bit;
//             bit = bit*10;
//         }
//     }

//     if(reversenum)
//     {
//         ret = ret*-1;
//     }
//     ret =  reverse(ret);
//     var max = (Math.pow(2,31)-1);
//     var min = Math.pow(-2,31)
//     if(ret > max)
//     {
//         return max;
//     }
//     if( ret < min )
//     {
//         return min;
//     }
//     return ret;

// var startindex = -2;
// var reverseindex = -2;

// var numberindex = -1;