/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    var arr = new Array(words.length);
    for (var j = 0; j < words.length; j++) {
        arr[j] = new Array();
        var tempstring = words[j];
        for (var i = 0; i < s.length; i++) {
            if (s[i] == tempstring[0]) {
                var substr = s.substr(i, tempstring.length);
                if (substr == tempstring) {
                    arr[j].push(i);
                }
                i = i + tempstring.length;
            }
        }
    }
    var word_arr = Array.from(arr[0]);
    word_arr.forEach((value,index)=>{
        word_arr[index] = value + words[index].length;
    });
    var ret = new Array();
    for (var j = 1; j < arr.length; j++) 
    {
        var temparr = arr[j];
        var find = true;
        for(var i = 0 ; i < temparr.length;i++)
        {
            if(word_arr.includes(temparr[i]))
            {
                word_arr = Array.from(temparr);
                word_arr.forEach((value,index)=>{
                    word_arr[index] = value + words[i].length;
                });
                continue;
            }else
            {
                find = false;
                break;
            }
        }
        if(find)
        {
            ret.push(j);
        }
    }
    console.log(ret);
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));