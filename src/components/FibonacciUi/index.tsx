import { useState } from "react";
import { workerDraw } from '@/util/worker'

export default function FibonacciUi() {
    const [input1, setInput1] = useState(1)
    const [input2, setInput2] = useState(2)
    const [count, setCount] = useState<Number[]>([])

    const runWorker = async () => {
        let res
        res = await workerDraw(
            (depts, m, n) => {
                console.log('worker环境：', globalThis);
                console.log('worker预打包依赖内容：', depts);
                const { map } = depts['_']
                const { fibonacci } = depts['util/math']
                return map([m, n], (num) => fibonacci(num))
            },
            input1,
            input2,
        )
        res && setCount(res)
        console.log('运行结果是：', res);

    }

    return (
        <div>
            <input type='number' value={input1} onChange={(e) => {
                setInput1(Number(e.target.value))
            }} />
            <input type='number' value={input2} onChange={(e) => {
                setInput2(Number(e.target.value))
            }} />
            <button onClick={() => runWorker()}>点击运行Worker</button>
            <div>运行结果：{count[0] + '/' + count[1]}</div>
        </div>
    )
}