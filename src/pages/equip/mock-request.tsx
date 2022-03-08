import { sleep } from 'antd-mobile-v5/es/utils/sleep'

let count = 0

export async function mockRequest() {
    if (count >= 5) {
        return []
    }
    await sleep(2000)
    count++
    return [
        '110GHz信号发生和分析系统',
        '59GHz高宽带示波器',
        'ICP蚀刻机-CI',
        'MA6双面光刻机',
        '低温热流罩',
        '400M核磁仪器',
        '摄像机',
        '风洞机',
        '3米风洞机',
        '录音机',
        '吹风机',
        '刻录机',
        '400M核磁仪器使用培训会'

    ]
}
