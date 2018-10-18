import React from 'react';
// import { connect } from 'dva';
// import { Button, Select } from 'antd';
// import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './videobody.less';
import Xgplayer from 'xgplayer-react';

const config = {
    id: 'pili',
    url: '/video/1.mp4',
    poster: '/img/1.jpg',
    pip: true,
    bullet: {
        switch: 'on', //开启'on',关闭'off'
        url: './danmu.json',
        method: 'get'
    },
};
const VideoPage = () => (
    <div className={styles.video_body}>
        <Xgplayer config={config} format={'mp4'} playerInit={Player => Player} />
        <div className={styles.video_body_danmulist}>
            弹幕列表<br/>
            <div>时间&emsp;弹幕内容&emsp;发送时间</div>
            {require('../../danmu.json').data.map(
                item =>
                <div>{moment(item.offset_time).format('mm:ss')}&emsp;{item.text}&emsp;{moment(item.create_time).format('MM-DD hh:mm')}</div>
            )}
        </div>
    </div>
    )

export default VideoPage;