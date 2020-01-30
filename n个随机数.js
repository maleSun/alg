/**
 * 编程题
 * 
 */
/**
 * [rannum 生成n个随机数]
 * @param  {[type]} range [范围0~rang]
 * @param  {[type]} n   [随机数个数]
 * @return {[type]}       [以数组形式返回]
 */
function random(range, n) {
    var randoms = [];
    while (true) {
        var flag = false;
        var len = randoms.length;
        var random = parseInt(1 + range * Math.random());
        for (var i = 0; i < len; i++) {
            if (randoms[i] === random) {
                flag = true;
                break;
            }
        }
        if (len === n) {
            break;
        }
        if (!flag) {
            randoms.push(random);
        }
    }
    return randoms;
}
