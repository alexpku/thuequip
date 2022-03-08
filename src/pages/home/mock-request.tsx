import { sleep } from 'antd-mobile-v5/es/utils/sleep'

let count = 0

export async function mockRequest() {
    if (count >= 5) {
        return []
    }
    await sleep(2000)
    count++
    return [
        '蛋白质化学平台服务通知',
        '核磁实验室技术分析报告',
        '实验动物中心安全培训通知',
        '医学院培训通知',
        '药学院技术分析大会',
        '400M核磁仪器使用培训会',
        '细胞功能分析平台流式分析技术实验',
        '能源动力在电力行业应用讲座',
        '风洞仪器操作培训',
        '尼康生物影像设备与鉴定平台培训通知',
        '化学院仪器使用培训',
    ]
}
