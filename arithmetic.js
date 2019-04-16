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

/**
 * [createRectGradient canvas全填充图形渐变]
 * @param  {[type]} ctx [2D上下文对象]
 * @param  {[type]} x   [图形、渐变起点坐标]
 * @param  {[type]} y   [图形、渐变起点坐标]
 * @param  {[type]} w   [图形宽度]
 * @param  {[type]} h   [图形高度]
 * @return {[type]}     [CanvasGradient对象]
 */
function createRectGradient(ctx, x, y, w, h) {
    return ctx.createLinearGradient(x, y, x + w, y + h);
}

/**
 * [twoSum 寻找数组中两数和为target的加数与被加数]
 * @param  {[type]} nums   [目标数组]
 * @param  {[type]} target [和数]
 * @return {[type]}        [description]
 */
var twoSum = function(nums, target) {
    //初始化加数数组
    var addArr = [],
        that = [...nums];
    //1. 升序数组排序
    var numsSort = that.sort(function(a, b) {
        return b - a;
    });
    var maxI = numsSort.length - 1;
    //2. 排除数组中最大两个数作为加数相加小于 target情况
    var s1 = (numsSort[maxI] + numsSort[maxI - 1]) < target ? true : false;
    var newNums = [];
    if (!s1) {
        return false;
    } else {
        //3. 排除数组中最小数作为加数与另一个加数相加大于 target情况
        var maxNum = target - numsSort[0];
        maxI = numsSort.findIndex(function(value, index, arr) {
            return value <= maxNum;
        });
        //即这种情况下最大数到数组之后的数不再需要，得到符合的数组
        newNums = numsSort.slice(0, maxI + 1);
    }
    //4. 外层循环找到到第一个加数，从数组第一位开始
    var len = newNums.length;
    //5. 内层循环找到被加数，一定大于或等于 target/2
    var addEnd = newNums.findIndex(function(value, index, arr) {
        return value >= Math.ceil(target / 2);
    });
    for (let outer = 0; outer < len; outer++) {
        //6. 此处分为 outer < addEnd -- outer >addEnd两种情况
        //outer < addEnd：内层循环从 addEnd开始，到len结束
        //outer > addEnd：内层循环从 outer + 1 开始(排除满足2倍情况的加数，若需要从outer开始)
        //不需重复加数和被加数
        var inner = outer < addEnd ? addEnd : outer + 1;
        while (inner < len) {
            var result = newNums[outer] + newNums[inner];
            var i1 = nums.indexOf(newNums[outer]),
                i2 = nums.indexOf(newNums[inner]);
            (result == target) && addArr.push([i1, i2]);
            inner++;
        }
    }
    return addArr;
};
