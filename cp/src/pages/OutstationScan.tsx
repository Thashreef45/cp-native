import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
// import { CheckBox } from "react-native-elements";
// import { Checkbox } from 'react-native-paper';
import { Checkbox, Text } from 'react-native-paper';
import Header from "../components/Header";
import { Colors } from "../constants/color-enum";

const OutstationScan = () => {
    const [isChecked, setIsChecked] = useState(false);
    console.log('render',isChecked)
    console.log(isChecked)
    return (
        <View style={styles.Container}>
            <Header Title={"Outstation Scan"} />
            <View style={styles.Page}>
                <View style={styles.SelectAll}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked(!isChecked);
                            }}
                            color={'green'}
                            uncheckedColor={'red'}
                        />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     },
    Container: {
        flex: 1,
        backgroundColor: Colors.SecondaryColor,
    },
    Page: {
        height: "100%",
        width: "100%",
    },
    SelectAll: {
        display: "flex",
        height: 35,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    checkBox: {
        width: 20,
        backgroundColor: "green",
    },
});

export default OutstationScan;

