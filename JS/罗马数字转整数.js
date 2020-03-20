/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) 
{
    var ret = 0;
    var map = new Map();
    map.set("Z",0);
    map.set("I",1);
    map.set("V",5);
    map.set("X",10);
    map.set("L",50);
    map.set("C",100);
    map.set("D",500);
    map.set("M",1000);

    var state = -1;//0-none,1-I,2-X,3-C
    var temp = "Z";
    for(var i = s.length-1; i >= 0 ;i--)
    {
        var char = s[i];
        if(state == -1)
        {
            temp = char;
        }else if(char=="I")
        {
            state = 1;
        }else if(char == "X")
        {   
            state = 2;
        }else if(char == "C")
        {
            state = 3;
        }else
        {
            ret += map.get(temp);
            temp = char;
            state = 0;
        }

        if(state == 0)
        {
            // ret += map.get(temp);
            // temp = "Z";
        }else
        {
            if(state == 1)
            {
                if(temp == "V")
                {
                    ret += 4;
                    temp = "Z";
                }else if(temp == "X")
                {
                    ret += 9;
                    temp = "Z";
                }else
                {
                    ret += map.get(temp);
                    temp = "I";
                }
            }else if(state == 2)
            {
                if(temp == "L")
                {
                    ret += 40;
                    temp = "Z";
                }else if(temp == "C")
                {
                    ret += 90;
                    temp = "Z";
                }else
                {
                    ret += map.get(temp);
                    temp = "X";
                }
            }else if(state == 3)
            {
                if(temp == "D")
                {
                    ret += 400;
                    temp = "Z";
                }else if(temp == "M")
                {
                    ret += 900;
                    temp = "Z";
                }else
                {
                    ret += map.get(temp);
                    temp = "C";
                }
            }else
            {
                state = 0;
            }
        }
        if(i == 0)
        {
            ret+= map.get(temp);
        }
    }
    return ret;
};


function main()
{
    console.log(romanToInt("MCMXCIV"));
    console.log("罗马数字转整数");
}
main();

// function GetValue(s,state,map)
// {
//     if(state == 1)
//     {
//         if(s == "V")
//         {
//             return 4;
//         }else if(s == "X")
//         {
//             return 9;
//         }else
//         {
//             return map.get(s);
//         }
//     }else if(state == 2)
//     {
//         if(s == "L")
//         {
//             return 40;
//         }else if(s == "C")
//         {
//             return 90;
//         }else
//         {
//             return map.get(s);
//         }
//     }else if(state == 3)
//     {
//         if(s == "D")
//         {
//             return 400;
//         }else if(temp == "M")
//         {
//             return 900;
//         }else
//         {
//             return map.get(s);
//         }
//     }else
//     {
//         return 0;
//     }
// }