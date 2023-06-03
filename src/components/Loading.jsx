import { Spin } from 'antd'

export const Loading = () => {
  return (
    <Spin size="large">
      <div style={{ padding: '40px', background: 'rgba(0, 0, 0, 0.05)' }}></div>
    </Spin>
  )
}