import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";


class Home extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <Text>订单查看服务</Text>
        <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default Home

