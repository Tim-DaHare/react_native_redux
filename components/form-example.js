import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Text, View, TouchableOpacity } from 'react-native'
import { TextInput, TextArea, Checkbox, RadioButtons, Select } from './custom-components'
import styles from '../styles'

const submitForm = values => {
    console.log(values)
}

const ExampleForm = ({ handleSubmit }) => (
    <View style={styles.container}>
        <Text>Text</Text>
        <Field name="textInput" component={TextInput} />

        <Text>Password</Text>
        <Field name="passwordInput" component={TextInput} secureTextEntry />

        <Text>Textarea</Text>
        <Field name="textArea" component={TextArea} />

        <Text>Checkbox</Text>
        <Field name="checkbox" component={Checkbox} />

        <Text>RadioButtons</Text>
        <Field name="radio" component={RadioButtons} 
            options={[
                {
                    name: 'Option 1',
                    value: 'option1'
                },
                {
                    name: 'Option 2',
                    value: 'option2'
                },
                {
                    name: 'Option 3',
                    value: 'option3'
                },
                {
                    name: 'Option 4',
                    value: 'option4'
                }
            ]}
        />

        <Text>Select</Text>
        <Field name="select" component={Select} 
            options={[
                {
                    name: 'Option 1',
                    value: 'option1'
                },
                {
                    name: 'Option 2',
                    value: 'option2'
                },
                {
                    name: 'Option 3',
                    value: 'option3'
                },
                {
                    name: 'Option 4',
                    value: 'option4'
                }
            ]}
        />

        <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit(submitForm)}
        >
            <Text>Submit</Text>
        </TouchableOpacity>
    </View>
)

export default reduxForm({
    form: 'example'
})(ExampleForm)

