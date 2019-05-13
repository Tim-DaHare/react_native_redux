/**
 * @format
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { updateText } from './actions'
import styles from './styles'
import { TouchableOpacity, View, Text } from 'react-native'

const App = ({ text, updateText }) => (
    <View style={styles.app__container}>
        <Text>{text}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => updateText('Button pressed')}
        >
            <Text>Press me</Text>
        </TouchableOpacity>
    </View>
)

const mapStateToProps = state => ({
    text: state.text
})

const mapDispatchToProps = dispatch => ({
    updateText: text => dispatch(updateText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)


