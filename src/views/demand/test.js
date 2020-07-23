// const timeAA = (num) => {
//     console.log(num);
// }
// let a;
// const test = () => {
//     // 定时器
//     // 倒计时
//     // 清除定时器
//     // 第一个参数：定时器执行的方法
//     // 第二个参数：事件
//     // 第三个参数：第一个方法的参数
//     // setTimeout()
//     // setInterval()
//     // clearInterval();
//     // setTimeout(AAA, 3000, 123);
//     a = setInterval(timeAA, 3000, 456);
// }
// test();

// clearInterval(a);

// // 去除数组的重复成员
// [...new Set(array)]
// console.log([...new Set([1, 2, 8, 6, 1])])

// v-model本质上就是语法糖，即利用v-model绑定数据后，其实就是既绑定了数据，又添加了一个input事件监听


// array
let arr = [1, 3, 9, 7, 5, 1, 2, 10]
// some 判断有无，有返回true, 没返回false
console.log(arr.some(item => item === 1))
// every 所有数据都符合要求，返回true, 否则返回false
console.log(arr.every(item => {
    console.log(item);
    return item < 10;
}))
// map 循环，返回新数组,类似for循环
let newArr = arr.map(item => {
    return item + 1;
})
console.log(newArr)
// forEach循环，无返回新数组，类似for循环
let sum = 0;
arr.forEach(item => { sum += item })
console.log(sum)
// find 找到就返回这个值，找不到undefined
console.log(arr.find(item => item > 6))
// findIndex 找到就返回位置，找不到-1
console.log(arr.findIndex(item=>item>6))
// include判断是否有这个值
console.log(arr.includes(5))


