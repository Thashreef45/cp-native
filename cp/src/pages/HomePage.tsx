import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/color-enum";

const HomePage = () => {
    return (
        <View style={styles.pageWrapper}>
            
            <View style={styles.DeliveryWrap}>
                <Text style={styles.headings}>Delivery</Text>

                <Options text={'Prepare DRS'}></Options>
                <Options text={'Delivery Task List'}></Options>
                <Options text={'Outstation Scan'}></Options>

            </View>


            <View style={styles.BookingWrapper}>
                <Text style={styles.headings}>Booking</Text>

                <View style={styles.NewBooking}>
                    {/* <Image 
                        style={styles.image}
                        source={require('/home/thashreef/Brototype/express-link/native/cp/src/images/Note Taking.png')}
                    /> */}
                    <View style={styles.image}></View>
                    <Text style={styles.Text}>New Booking</Text>
                </View>

            </View>


        </View>
    );
}



const Options =({text})=>{
    return(
        <View style={styles.PrepareDrs}>
        {/* <Image 
            style={styles.image}
            source={require('/home/thashreef/Brototype/express-link/native/cp/src/images/Note Taking.png')}
        /> */}
        <View style={styles.image}></View>
        <Text style={styles.Text}>{text}</Text>
    </View>
    )
}




export default HomePage;



const styles = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        backgroundColor: Colors.SecondaryColor,
    },
    DeliveryWrap: {
        height: '50%',
        width: '100%',
        // backgroundColor: 'red',
        padding: 25,
    },
    BookingWrapper: {
        height: '50%',
        width: '100%',
        // backgroundColor: 'green',
        padding: 25,        
    },
    headings: {
        fontSize: 20,
        marginBottom:20,
        fontWeight:'bold'
    },

    PrepareDrs : {
        height : '20%',
        width : '100%',
        display:'flex' ,
        flexDirection:'row',
        marginBottom:'auto',
        marginTop:'auto'

    },
    image : {
        height:35,
        width:35,
        backgroundColor:'black',
        marginTop:'auto',
        marginBottom:'auto',
        borderRadius:20
    },
    Text : {
        color:'#252222',
        marginTop:'auto',
        marginBottom:'auto',
        marginLeft:30,
        fontSize:20,
        fontWeight:'500'
    },
    NewBooking : {
        height : '20%',
        width : '100%',
        marginTop:15,
        display:'flex' ,
        flexDirection:'row',
    }
    
});



