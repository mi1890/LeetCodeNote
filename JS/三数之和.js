/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var ret = new Array();
    if (nums.length < 3) {
        return ret;
    }
 
    nums.sort((a,b)=>{return a-b;});
    var l = undefined;
    var m = undefined;
    var r = undefined;

    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] == l) {
            continue;
        }
        if (nums[i] > 0) {
            break;
        }
        l = nums[i];
        m = undefined;
        for (var j = i + 1; j < nums.length - 1; j++) {
            if (nums[j] == m) {
                continue;
            }
            // console.log("i:",i,":",nums[i],"-j",j,":",nums[j]);
            var counter = nums[i] + nums[j];
            if (counter > 0 ||(counter == 0 && nums[j] >= 0)) {
                break;
            }
            m = nums[j];
            r = undefined;
            for (var k = nums.length-1; k > j; k--)
            {
                if (nums[k] == r) {
                    continue;
                }
                // console.log("i:",i,":",nums[i],"-j",j,":",nums[j],"-k:",k,":",nums[k]);
                r = nums[k];
                var morecounter = counter + nums[k];
                if (morecounter > 0) {
                    continue;
                }else if(morecounter < 0)
                {
                    break;
                }
                if (morecounter == 0) {
                    ret.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return ret;
};

function main() {
    console.log(threeSum([0,0,0]));
    console.log("三数之和");
}
main();

   // for (var i = 1; i < nums.length; i++) {
    //     var sortindex = i - 1;
    //     var minindex = i - 1;
    //     for (var j = i - 1; j < nums.length; j++) {
    //         if (nums[minindex] > nums[j]) {
    //             minindex = j;
    //         }
    //     }
    //     if (sortindex != minindex) {
    //         var temp = nums[minindex];
    //         nums[minindex] = nums[sortindex];
    //         nums[sortindex] = temp;
    //     }
    // }


// for(var i = 0 ; i < nums.length -2;i++)
//         {
//             if(nums[i] > 0 )
//             {
//                 break;
//             }
//             if(nums[i] == l)
//             {
//                 continue;
//             }
//             l = nums[i];
//             m = undefined;
//             for(var j = i+1; j < nums.length-1;j++)
//             {
//                 var counter = nums[i]+ nums[j];
//                 if(counter >0 )
//                 {
//                     break;
//                 }
//                 if(nums[j] == m)
//                 {
//                     continue;
//                 }
//                 m = nums[j];
//                 r= undefined;
//                 for(var k = j+1; k < nums.length; k++)
//                 {
//                     if(nums[k] == r)
//                     {
//                         continue;
//                     }
//                     r = nums[k];
//                     var morecounter = counter + nums[k];
//                     if(morecounter > 0)
//                     {
//                         break;
//                     }
//                     if(morecounter == 0)
//                     {
//                         var temparr = [0,0,0];
//                         temparr[0] = nums[i];
//                         temparr[1] = nums[j];
//                         temparr[2] = nums[k];
//                         ret.push(temparr);
//                     }
//                 }
//             }
//         }



// var ret = new Array();
// var cache = new Map();
// for(var i = 0 ; i < nums.length-1 ;i++)
// {
//     for(var j = i+1;j <nums.length ;j++)
//     {
//         if(nums[i] == nums[j])
//         {
//             continue;
//         }
//         var value =0- (nums[i] + nums[j]);
//         if(!cache.has(value))
//         {
//             cache.set(value,new Array());
//         }
//         cache.get(value).push([i,j]);
//     }
// }
// for(var i = 0 ; i < nums.length;i++)
// {
//     var tempvalue= nums[i];
//     if(cache.has(tempvalue))
//     {
//         cache.forEach((value,key)=>
//         {
//             value.forEach((array,index)=>
//             {
//                 if(array.indexOf(i) <0)
//                 {
//                     var value1= nums[array[0]];
//                     var value2= nums[array[1]];
//                     if(value1 != tempvalue && value2 != tempvalue)
//                     {
//                         console.log(tempvalue,"&",value1,"&",value2);
//                         ret.push(tempvalue,value1,value2);
//                     }
//                 }
//             });
//         });


//     }
// }