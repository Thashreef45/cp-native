import { StyleSheet, View, TextInput } from "react-native"
import { Colors } from "../constants/color-enum"
import Header from "../components/Header"
// import { Dropdown } from "react-native-element-dropdown"
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from "react"


const BookingPage = () => {

    const [selected, setSelected] = useState('')
    const data = [
        // {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]


    return (
        <View style={style.container}>
            <Header Title={'New Booking'} />
            <View style={style.Page}>
                <TextInput
                    style={[style.Input, { marginTop: 50 }]}
                    maxLength={30}
                    placeholder="Address"
                />
                <TextInput
                    placeholder="Phone"
                    style={style.Input}
                    keyboardType="numeric"
                    maxLength={10}
                />

                <TextInput
                    placeholder="Declared value (In Rupees)"
                    style={[style.Input,{marginBottom:20}]}
                    keyboardType="numeric"
                    maxLength={6}
                />

                <SelectList
                    setSelected={(val:string) => setSelected(val)}
                    data={data}
                    save="value"
                />

            </View>
        </View>

    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SecondaryColor
    },
    Page: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    Input: {
        // backgroundColor:'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: 250

    },
})

export default BookingPage
