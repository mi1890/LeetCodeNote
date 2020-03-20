/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) 
{
    var map = new Map();
    var temp = 0;
    for(let str of strs)
    {
        for(var i = 0 ; i < str.length; i++)
        {
            var code = str.charCodeAt(i);
            temp = temp & code;
        }
        if(!map.has(temp))
        {
            map.set(temp,new Array());
        }
        map.get(temp).push(str);
    }
    var arr = new Array();
    for(let kv of map)
    {
        arr.push(kv[1]);
    }
    return arr;
};
function main() {
    console.log(groupAnagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]));
    console.log("字母异位词分组");
}
main();