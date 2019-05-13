import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    app__container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '50%'
    },
    input: {
        marginBottom: 10,
    },
    textInput: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    },
    textArea: {
        minHeight: 50,
        maxHeight: 100
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'blue'
    },
    radiobutton__container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    radiobutton: {
        width: 15,
        height: 15,
        borderRadius: 50,
        borderWidth: 1,
        marginRight: 10
    }
})

export default styles