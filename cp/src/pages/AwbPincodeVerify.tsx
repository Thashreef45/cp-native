import { TouchableOpacity, View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import Header from "../components/Header"
import { StyleSheet } from "react-native"
import { Colors } from "../constants/color-enum"
import { useState } from "react"


const AwbPincodeVerify = () => {
    const [pincode, setPincode] = useState('')
    const [awb, setAwb] = useState('')
    const [errMsg, setError] = useState('')


    const pincodeHandler = (pincode: string) => {
        if (pincode.length == 1 && pincode[0] == '0') {
            pincode = ''
        }
        if (isNaN(Number(pincode[pincode.length - 1]))) {
            pincode = pincode.slice(0, pincode.length - 1)
        }
        setPincode(pincode)
    }


    const AwBHandler = (awb: string) => {
        if (awb.length == 1) {
            if (!isNaN(Number(awb[0]))) {
                awb = ''
            }
        } else if (awb.length == 2) {
            if (!isNaN(Number(awb[1]))) {
                awb = awb[0]
            }
        } else {
            if (isNaN(Number(awb[awb.length - 1]))) {
                awb = awb.slice(0, awb.length - 1)
            }
        }
        setAwb(awb)
    }

    const submitHandler = () => {
        if (awb.length < 10 || pincode.length < 6) {
            setError('Validate your input')
            setTimeout(() => {
                setError('')
            }, 3000);
        } else {
            //api
        }
        console.log(pincode, awb, 'data <<<')
    }

    return (
        <View>
            <Header Title={'Booking'}></Header>
            <View style={style.Page}>
                <TextInput
                    style={style.inputField}
                    placeholder='Awb'
                    textColor="black"
                    value={awb}
                    maxLength={10}
                    onChangeText={(text) => AwBHandler(text)}
                />

                <TextInput
                    style={style.inputField}
                    placeholder='Pincode'
                    textColor="black"
                    keyboardType={'numeric'}
                    value={pincode}
                    maxLength={6}
                    onChangeText={(text) => pincodeHandler(text)}
                />

                <TouchableOpacity style={style.Button}
                    onPress={submitHandler}
                >
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>


                <Text style={style.errMsg}>{errMsg}</Text>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Page: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.SecondaryColor,
        paddingTop: 90
    },
    inputField: {
        width: 250,
        height: 40,
        backgroundColor: '#A6ADC4',
        borderRadius: 10,
        marginVertical: 20
    },
    Button: {
        backgroundColor: Colors.PrimaryColor,
        width: 250,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    errMsg: {
        marginTop: 20,
        color: 'red'
    }
})

export default AwbPincodeVerify