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
