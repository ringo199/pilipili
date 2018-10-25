import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './less/home.less';

const { Header, Content, Footer } = Layout;

const mainmenu = [
  {
    name: '主页',
    to: '/home',
  },
  {
    name: 'pilipili播放器',
    to: '/pilipili',
  },
]

const Home = ({ children }) => {
  console.log('children', children);
  return (
    <div className={styles.home}>
      <Layout className={styles.home_lay}>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            {mainmenu.map(item => (
              <Menu.Item key={item.to}>
                <Link to={item.to}>
                  {item.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          {/* <img src="/img/logoindex.jpg" style={{ width: 100, height: 50 }}/> */}
        </Header>
        <Content>
          <Breadcrumb style={{ margin: '16px 0', padding: '0 50px' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>番剧</Breadcrumb.Item>
            <Breadcrumb.Item>galgame</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles['home_lay_content']}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          啤酒鸭梨啤酒鸭梨 (゜-゜)つロ 干杯~-pilipili
        </Footer>
      </Layout>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
