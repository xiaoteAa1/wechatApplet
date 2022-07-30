import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import TabBar from "../common/tabBar";


class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <View><Text>Hello, 主页</Text></View>
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

export default Index

