/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = new Map();
    map["["] = "]";
    map["{"] = "}";
    map["("] = ")";

    var cache = new Array();
    for (var i = 0; i < s.length; i++) {
        var temp = s[i];
        if (map[temp] != null) {
            cache.push(map[temp]);
        } else {
            if (cache[cache.length - 1] == temp) {
                cache.pop();
                continue;
            } else {
                return false;
            }
        }
    }
    return cache.length == 0;
};

function main() {
    console.log(isValid("()"));
    console.log("有效的括号");
}
main();