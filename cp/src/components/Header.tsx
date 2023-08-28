import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../constants/color-enum"

const Header = (props:{Title:string}) =>{
    return(
        <View style={style.HeaderContainer}>
            <View style={style.HeaderPart}>
                <Text style={style.HeadText}>{props.Title}</Text>
            </View>
            <View style={style.ProfilePart}>
                <View style={style.Logout}></View>
            </View>
        </View>
    )
}

export default Header


const style = StyleSheet.create({
    HeaderContainer:{
        flex:1,
        flexDirection:'row',
        marginBottom:60
    },
    HeaderPart: {
        marginBottom:0,
        width:'50%',
        height:60,
        backgroundColor:Colors.PrimaryColor,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    HeadText: {
        fontSize:18,
        fontWeight:'600'
    },
    ProfilePart : {
        marginBottom:0,
        width:'50%',
        height:60,
        backgroundColor:Colors.PrimaryColor,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',

    },
    Logout : {
        height:40,
        width:40,
        backgroundColor:'black',
        marginRight:18,
        borderRadius:20
    }
})