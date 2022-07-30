import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import TabBar from "../common/tabBar";



class Personal extends Component {
    componentWillReceiveProps (nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    render () {
        return (
            <View>
                <View><Text>个人信息展示</Text></View>
                <TabBar tabBarCurrent={3} />
            </View>
        )
    }
}

export default Personal

