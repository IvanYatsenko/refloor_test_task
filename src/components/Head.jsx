import { Breadcrumb } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { useBreadcrumbItems } from '../hooks/BreadcrumbHook'

export const Head = () => {
  const breadcrumbItems = useBreadcrumbItems()

  return (
    <Header
      style={{
        background: 'green',
        borderRadius: '10px',
        alignItems: 'center',
        display: 'flex',
        height: 90,
      }}
    >
      <Breadcrumb items={breadcrumbItems} />
    </Header>
  )
}
