import React, { Component } from 'react';
import { Breadcrumb, Icon, Divider, Avatar, Button, Tag } from 'antd';
import moment from 'moment';
// import _ from 'lodash';
import { connect } from 'dva';
import VideoPlay from './components/videoplay';
import styles from './less/videobody.less';

class Videopage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    componentDidMount() {
        const { match: { params: { videoID } }, dispatch } = this.props;
        if (videoID) {
            dispatch({
                type: 'videopage/getVideoInfoRemote',
                payload: { videoID },
              });
        }
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'videopage/clearRemote' });
    }
    render() {
        const { VideoInfo, UPInfo, taglist, danmuInfo } = this.props;
        return (
            <div className={styles.video_page}>
                <div className={styles.video_page__topinfowarp}>
                    <div className={styles.video_page__topinfowarp_left}>
                        <div className={styles.video_page__topinfowarp_left_title}>
                            {VideoInfo.title}
                        </div>
                        <div className={styles.video_page__topinfowarp_left_info}>
                            <Breadcrumb>
                                {VideoInfo.type && VideoInfo.type.map(item =>
                                    <Breadcrumb.Item>{item}</Breadcrumb.Item>
                                )}
                            </Breadcrumb>
                            &emsp;
                            {moment(VideoInfo.date).format('YYYY-MM-DD HH:mm:ss')}
                        </div>
                        <div className={styles.video_page__topinfowarp_left_action}>
                            <div><Icon type="play-circle" theme="outlined" /> {VideoInfo.videodata && VideoInfo.videodata.play}</div>
                            <div><Icon type="align-left" theme="outlined" /> {danmuInfo.num}</div>
                            <Divider type="vertical" style={{padding: 0}}/>
                            <div><Icon type="dollar" theme="outlined" /> 硬币{VideoInfo.videodata && VideoInfo.videodata.coin}</div>
                            <div><Icon type="star" theme="outlined" /> 收藏{VideoInfo.videodata && VideoInfo.videodata.collection}</div>
                        </div>
                    </div>
                    <div className={styles.video_page__topinfowarp_right}>
                        <div className={styles.video_page__topinfowarp_right_avatar}>
                            <Avatar size={68} src={UPInfo.avatar} />
                        </div>
                        <div className={styles.video_page__topinfowarp_right_info}>
                            <div className={styles.video_page__topinfowarp_right_info_name}>
                                {UPInfo.name}
                            </div>
                            <div className={styles.video_page__topinfowarp_right_info_content}>
                                {UPInfo.intro}
                            </div>
                            <div className={styles.video_page__topinfowarp_right_info_sub}>
                                投稿： {UPInfo.UPdata && UPInfo.UPdata.submission} &emsp;&emsp;粉丝： {UPInfo.UPdata && UPInfo.UPdata.fans}
                            </div>
                            <Button
                                type="primary"
                                className={styles.video_page__topinfowarp_right_info_button}
                            >
                                +关注
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.video_page__playwarp}>
                    <VideoPlay
                        {...this.props}
                    />
                </div>
                <div className={styles.video_page__tagwarp}>
                    {taglist.map(item => <Tag className={styles.video_page__tagwarp_tag}>{item}</Tag>)}
                    <Icon type="plus-circle" theme="outlined" /><br />
                    &nbsp;查看标签修改记录<Divider type="vertical" />查看标签使用说明
                </div>
                <div className={styles.video_page__footerinfowarp}>
                    {VideoInfo.intr}
                </div>
                <div className={styles.video_page__comment}>
                    评论
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
      ...state.videopage,
    }),
  )(Videopage);