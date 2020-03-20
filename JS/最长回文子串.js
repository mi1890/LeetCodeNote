var longestPalindrome = function(s) 
{
    var ret_first =0;
    var ret_last = 0;

    var indexfirst = 0;
    var indexlast = 0;
    var even = false;
    let array = s.split("");
    if(s.length ==1)
    {
        return s;
    }
    if(s.length == 2 && s[0] == s[1])
    {
        return s;
    }
    for(var i = 0 ;  i < array.length ;i++)
    {
        indexfirst = i;
        indexlast = 0;
        for(var j = array.length-1;j > i; j--)
        {
            if(array[indexfirst] == array[j])
            {
                indexfirst++;
                if(indexlast == 0)
                {
                    indexlast = j;
                }
            }else
            {
                indexfirst = i;
                if(indexlast > 0)
                {
                    j = indexlast;
                }
                indexlast = 0;
            }
            if(j - indexfirst == 0 || j - indexfirst == 1)
            {
                if(indexlast != 0)
                {
                    if(indexlast - i > ret_last -ret_first)
                    {
                        ret_first = i;
                        ret_last = indexlast;
                    }
                    indexlast = 0;
                }
            }
        }
    }
    return s.substring(ret_first,ret_last+1);
};

function main()
{
    console.log(longestPalindrome("abacab"));
    console.log("最长回文子串");
}
main();

// for(var i = 0 ;  i < array.length - 2 ;i++)
// {
//     var bad = false;
//     if(i == array.length - 3)
//     {
//         if(array[array.length - 2] == array[array.length - 1] && array[array.length -1] != array[i] )
//         {
//             if(1 > (indexlast - indexfirst))
//             {
//                 indexlast = i+2;
//                 indexfirst = i+1;
//             }
//         }else if(array[array.length - 1] == array[i])
//         {
//             if(2 > (indexlast - indexfirst))
//             {
//                 indexlast = i+2;
//                 indexfirst = i;
//             }
//         }
//     }
//     if(array[i] == array[i+1] ||array[i] == array[i+2])
//     {
//         var tempadd = array[i] == array[i+1]?1:2;
//         tempadd = array[i+1] == array[i+2]?2:tempadd;

//         var  tempstart  = i;
//         var tempend = i+tempadd;  
//         if((tempend - tempstart) > (indexlast - indexfirst))
//         {
//             indexlast = tempend;
//             indexfirst = tempstart;
//         }
//         for(var j = 1 ; j < i+1;j++)
//         {
//             if(array[i-j] == array[i+tempadd+j])
//             {
//                 tempstart = i -j;
//                 tempend = i+tempadd+j;
//             }
//             if((tempend - tempstart) > (indexlast - indexfirst))
//             {
//                 indexlast = tempend;
//                 indexfirst = tempstart;
//             }
//         }
//     }
    
// }
// return s.substring(indexfirst,indexlast+1);



    // for(var i = array.length-1 ;  i >=0 ;i--)
    // {
    //     indexlast = i;
    //     for(var j = 0;j <i; j++)
    //     {
    //         if(array[indexlast] == array[j])
    //         {
    //             indexlast--;
    //             if(indexfirst == -1)
    //             {
    //                 indexfirst = j;
    //             }
    //         }else
    //         {
    //             indexlast = i;
    //             indexfirst = -1;
    //         }
    //         if( indexlast -j == 0 ||  indexlast -j == 1)
    //         {
    //             if(indexfirst != -1)
    //             {
    //                 if(   i -indexfirst >   ret_last - ret_first)
    //                 {
    //                     ret_first = ret_first;
    //                     ret_last = i;
    //                 }
    //                 indexlast = 0;
    //             }
    //         }
    //     }
    // }