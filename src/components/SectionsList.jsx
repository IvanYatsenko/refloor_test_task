import { Avatar, Breadcrumb, Layout, List } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import imgDefault from './../assets/img/section-img.png'
import { Content, Header } from 'antd/es/layout/layout'
import { produtctCountPostfixWord } from '../services/SectionService'

export const SectionsList = () => {
  const { isLoading, catalog } = useSelector((state) => state.catalogReducer)
  return (
    <Layout>
      <Header
        style={{
          background: 'green',
          borderRadius: '10px',
          alignItems: 'center',
          display: 'flex',
          height: 90,
        }}
      >
        <Breadcrumb
          items={[
            {
              title: 'Главная',
            },
          ]}
        />
      </Header>
      <Content>
        <List
          style={{ marginTop: 20 }}
          loading={isLoading}
          itemLayout="vertical"
          dataSource={catalog.sections}
          size="large"
          renderItem={(section) => (
            <List.Item
              style={{
                border: '1px solid green',
                marginBottom: 10,
                borderRadius: '12px',
              }}
            >
              <Link to={`/${section.id}`}>
                <List.Item.Meta
                  avatar={<Avatar src={imgDefault} />}
                  title={section.title}
                  description={`${
                    section.items.length
                  } ${produtctCountPostfixWord(section.items.length)}`}
                />
              </Link>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  )
}
