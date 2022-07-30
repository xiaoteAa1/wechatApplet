import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import TabBar from "../common/tabBar";



class HotSpot extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View><Text>点餐服务</Text></View>
        <TabBar tabBarCurrent={1} />
      </View>
    )
  }
}

export default HotSpot

