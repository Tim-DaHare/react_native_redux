/**
 * @format
 * @flow
 */

import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import ExampleForm from './components/form-example'

const App = () => (
    <View style={styles.app__container}>
        <ExampleForm />
    </View>
)

export default App