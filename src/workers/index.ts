import workerPool from "workerpool";
import workerDepts from '@/util/worker/worker-depts'


/**
 * 
 * @param fn 动态传入的函数字符串
 * @param args  参数列表
 * @returns 
 * 利用new Function 动态创建一个函数（创建时就被解析了，因此优化编译器无法对其进行优化）。
 * 优点：动态向其传递内容，但是其 作用域是 全剧作用域
 * 所以需要用到 apply 改写下 this上下文
 * 
 * 向worker中传入要使用的第三方库的依赖，使其作为参数列表
 */
function runWithDepts (fn: any, ...args: any) {
    try {
        var f = new Function('return (' + fn + ').apply(null, arguments);')
        console.log('f', f);
        console.log('f的类型', Object.prototype.toString.call(f));
        
        return f.apply(f, [workerDepts].concat(args))
    } catch (error) {
        console.log(error);
        throw error
        
    }
}


workerPool.worker({
    runWithDepts
})