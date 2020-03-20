/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) 
{
    var ret = "";
    if(numRows == 1)
    {
        return s;
    }
    let array = s.split("");
    var space = numRows+ numRows-2;
    var looptime = Math.ceil(array.length/space);
    
    for(var i = 0 ; i < numRows;i++)
    {
        for(var j = 0 ; j < looptime ; j++)
        {
            var index = j*space +i;
            if(index < array.length)
            {
                if(i == 0 || i == numRows -1)
                {
                    ret =ret.concat(array[index]);
                }
                else
                {
                   ret =ret.concat(array[index]);
                     var neighbornode = space*(j+1) - (index-j*space);
                    if(neighbornode < array.length)
                    {
                        ret =ret.concat(array[neighbornode]);
                    }
                }
            }
        }
    }
    return ret;
}

function main()
{
    console.log(convert("PAYPALISHIRING",3));
    console.log("Z字形变换");
}
main();


    // var stringarrays = new Array();
    // var looptime = Math.ceil(array.length/numRows);
    // for(var i = 0 ; i < looptime ; i++)
    // {
    //     var temparray = new Array();
    //     for(var j = 0 ; j < space; j++)
    //     {
    //         temparray.push(array[i*space + j]);
    //     }
    //     stringarrays.push(temparray)
    // }
    // for(var i = 0 ; i < space ; i++)
    // {

    //     for(var j = 0 ; j < space; j++)
    //     {
    //         ret.push(stringarrays[i][j]);
    //     }
    // }
    // console.log(array);