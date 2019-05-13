import React from 'react'
import styles from '../styles'
import { TextInput as NativeTextInput, View, Text, Switch, Picker, TouchableOpacity } from 'react-native'

export const TextInput = ({ input: { onChange, ...inputProps }, ...props }) => (
    <NativeTextInput 
        style={[ styles.input, styles.textInput]} 
        onChangeText={onChange} 
        {...inputProps} 
        {...props} 
    />
)

export const TextArea = ({ input: { onChange, ...inputProps }, ...props }) => (
    <NativeTextInput 
        style={[styles.input, styles.textInput, styles.textArea]} 
        onChangeText={onChange}
        multiline={true} 
        {...inputProps} 
        {...props}
    />
)

// Uses native Switch component but could be changed to a custom component ofcourse
export const Checkbox = ({ input: { onChange, ...inputProps }, ...props }) => (
    <Switch 
        style={styles.input} 
        onValueChange={onChange} 
        {...inputProps} 
        {...props} 
    />
)

// Make sure to pass unique values
export const RadioButtons = ({ input: { onChange, value }, options = [] }) => (
    <View>
        {options.map((option, i) => (
            <TouchableOpacity 
                key={i}
                onPress={() => onChange(option.value)}
                style={styles.radiobutton__container}
            >
                <View style={[styles.radiobutton, { backgroundColor: value === option.value ? 'blue' : 'red' }]}></View>
                <Text>{option.name}</Text>
            </TouchableOpacity> 
        ))}
    </View>
)

export const Select = ({ input: { onChange, value, ...inputProps }, options = [], ...props }) => (
    <Picker
        selectedValue={value}
        onValueChange={value => onChange(value)}
        {...props}
        {...inputProps}
    >
        {options.map((option, i) => (
            <Picker.Item key={i} label={option.name} value={option.value} />
        ))}
    </Picker>
)
