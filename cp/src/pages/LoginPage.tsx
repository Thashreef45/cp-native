import { useState } from "react"
import { Text, TextInput, SafeAreaView, View, StyleSheet, TouchableOpacity,Image } from "react-native"
import { Colors } from "../constants/color-enum"

const LoginPage = () => {


    const [id, setId] = useState('')
    const [pasword, setPasword] = useState('')
    const [error, setError] = useState('')


    const onSubmitHandler = () => {
        if (!id || !pasword) setError('Invalid Input')
        setTimeout(() => {
            setError('')
        }, 1500)
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContainer}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source={require('/home/thashreef/Brototype/express-link/native/cp/src/images/Screenshot_2023-06-20_121057-removebg-preview.png')} 
                    />
                </View>

                <TextInput
                    placeholder='Id'
                    style={styles.input}
                    onChangeText={(text) => setId(text)}
                    value={id}
                />

                <TextInput
                    placeholder='Password'
                    secureTextEntry
                    style={[styles.password, styles.input]}
                    value={pasword}
                    onChangeText={(pw) => setPasword(pw)}
                >
                </TextInput>

                <Text style={styles.errorText}>{error}</Text>

                <TouchableOpacity style={styles.button} onPress={() => onSubmitHandler()}>
                    <Text>Login</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SecondaryColor,
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
    },

    card: {
        height: 75,
        width: 250,
        borderRadius: 5,
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80

    },
    image: {
        height: 75,
        width: 250,
    },
    input: {
        letterSpacing: 3,
        borderBottomWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        width: 250,
        marginTop: 10,
        marginBottom: 35,
        // textTransform:'uppercase',

    },
    password: {
        marginBottom: 25,
    },
    button: {
        width: 250,
        height: 30,
        backgroundColor: Colors.PrimaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 14,
    },
    errorText: {
        color: '#db5c5c'
    }
});


export default LoginPage