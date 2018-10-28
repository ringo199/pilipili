import React, { Component } from 'react';
import { Carousel, Tabs, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './less/home.less';

const { TabPane } = Tabs;

const datalist = {
    type: '音乐',
    child: [
        {
            id: 1,
            to: '/pilipili/pv1',
            src: '/img/1.jpg',
        },
        {
            id: 2,
            to: '/pilipili/pv2',
            src: '/img/2.jpg',
        }
    ],
}

const modulelay = props => {
    return (
        <div className={styles.homepage_module}>
            <div className={styles.homepage_module_left}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={props.type} key="1">
                        <Row>
                            {props.child.map(
                                item => (
                                    <Col span={6} key={item.id} className={styles.homepage_module_left_col}>
                                        <div className={styles.homepage_module_left_col_warp}>
                                            <Link to={item.to}>
                                                <img src={item.src} alt=''/>
                                            </Link>
                                        </div>
                                    </Col>) )}
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
            <div className={styles.homepage_module_right}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="排行" key="1">
                        施工中~~~
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

class Homepage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
            <div className={styles.homepage}>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                {modulelay(datalist)}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Homepage;
