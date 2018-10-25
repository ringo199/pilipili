import React, { Component } from 'react';
import { Breadcrumb, Icon, Divider, Avatar, Button, Tag } from 'antd';
import moment from 'moment';
import VideoPlay from './components/videoplay';
import styles from './less/videobody.less';

const taglist = ['柚子社', '魔女的夜宴', 'サノバウィッチ'];

class Videopage extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
            <div className={styles.video_page}>
                <div className={styles.video_page__topinfowarp}>
                    <div className={styles.video_page__topinfowarp_left}>
                        <div className={styles.video_page__topinfowarp_left_title}>
                            柚子社8th「魔女的夜宴」OP Movie
                        </div>
                        <div className={styles.video_page__topinfowarp_left_info}>
                            <Breadcrumb>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>音乐</Breadcrumb.Item>
                                <Breadcrumb.Item>音乐选集</Breadcrumb.Item>
                            </Breadcrumb>
                            &emsp;
                            {moment(1420984252000).format('YYYY-MM-DD HH:mm:ss')}
                        </div>
                        <div className={styles.video_page__topinfowarp_left_action}>
                            <div><Icon type="play-circle" theme="outlined" /> 2.0万</div>
                            <div><Icon type="align-left" theme="outlined" /> 63</div>
                            <Divider type="vertical" style={{padding: 0}}/>
                            <div><Icon type="dollar" theme="outlined" /> 硬币67</div>
                            <div><Icon type="star" theme="outlined" /> 收藏515</div>
                        </div>
                    </div>
                    <div className={styles.video_page__topinfowarp_right}>
                        <div className={styles.video_page__topinfowarp_right_avatar}>
                            <Avatar size={68} src="//i0.hdslb.com/bfs/face/4fd0cf6de4436d6e46432df82d6abf67ae4cfa68.jpg@68w_68h.jpg" />
                        </div>
                        <div className={styles.video_page__topinfowarp_right_info}>
                            <div className={styles.video_page__topinfowarp_right_info_name}>
                                昨夜丶Sakuya
                            </div>
                            <div className={styles.video_page__topinfowarp_right_info_content}>
                                我喜欢上了你 于是我买了日记 为了维系与花儿共飞散的光阴
                            </div>
                            <div className={styles.video_page__topinfowarp_right_info_sub}>
                                投稿： 108 &emsp;&emsp;粉丝： 4125
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
                    youtube<br />
                    主題歌「恋せよ乙女！」<br />
                    歌手の米倉千尋<br />
                    （作詞:Riryka（Angel Note）、<br />
                    作曲:Famishin（ゆずソフト）、<br />
                    編曲:井ノ原智さん（Angel Note））<br />
                    アニメーション制作：フロンティアチャイルド。<br />
                    絵コンテ・撮影・3DCGI：ろど。<br />
                </div>
                <div className={styles.video_page__comment}>
                    评论
                </div>
            </div>
        )
    }
}

export default Videopage;