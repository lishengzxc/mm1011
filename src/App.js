import React, { Component } from 'react'
import ImageView from 'react-imageview'

import 'react-imageview/dist/react-imageview.min.css'

export default class Main extends Component {

  render() {
    const imagelist = [
      'https://gw.alicdn.com/tfs/TB1y3KdiO_1gK0jSZFqXXcpaXXa-720-1280.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718966&di=87ad69093e250ad3acf9131f20d22d5a&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F02%2F19%2F7a39d3bf1f13c92e30874404c0908eb2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718965&di=3881de610ffce803a0b9dbfce4b342e4&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F518621e1fbd047a00cedb02efec97e0250358b5a2210e9-zpP4th_fw658',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718964&di=ce45a4fa5fbdb3bf9ebfae7a45f5d91a&imgtype=0&src=http%3A%2F%2Fp2.ssl.cdn.btime.com%2Ft01c8d121515585351a.jpg%3Fsize%3D640x524',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718964&di=b5c49017a0a15d0536f2b4d6ffbf08b8&imgtype=0&src=http%3A%2F%2Ftva2.sinaimg.cn%2Fcrop.0.0.535.535.1024%2F006bp2rHjw1f0me0cdh4sj30ex0go41r.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718963&di=24b99a1a7dc492ab36f7cbf4eebf9f34&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D7133ddf5d2a20cf44690fed746084b0c%2F0431d7dda144ad347133ddf5d2a20cf430ad85c2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718963&di=28c87468dd7fb0e90b19dcb83c9afdfa&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2Fb60d4a83gy1fegttg1alwj20qo0zkdqq.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718963&di=1a18acc168f902e010d18f2433c249d5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F26%2F20161026132522_rHmjc.thumb.224_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778718961&di=7b876c450f8a3ba1ebc8f0372aba0c11&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F31%2F20170731103048_zaeTw.thumb.700_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778813381&di=7dd429d671e12439e89dc2c789ac6b9c&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F031b1995b0e1119a8012043d85871f4.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570778813379&di=c7d8f5137342fb78650c8f1f3247c07b&imgtype=0&src=http%3A%2F%2Fi1.img.969g.com%2Ffs%2Fimgx2011%2F10%2F19%2F115_155909_9caa7.jpg',
      'https://gw.alicdn.com/tfs/TB1ptOaiFT7gK0jSZFpXXaTkpXa-1215-2160.png',
    ]
    return <div>
      <ImageView imagelist={imagelist} />
      <audio src="https://lishengdefile.oss-cn-shanghai.aliyuncs.com/%E6%9D%8E%E9%9B%AA%E8%8E%B1%20-%20%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90.mp3" autoPlay />
    </div>
  }

}