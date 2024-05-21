import React from 'react';
import {StyleSheet, View, Platform} from "react-native";

import {AppTextBold} from "./ui/AppTextBold";

export const HeaderForm = () => {
    return (
        <View style={{ ...styles.headform, ...Platform.select({
                ios: styles.headIos,
                android: styles.headbAndroid
            })}}
        >
            <AppTextBold style={styles.text}>Менеджер паролів</AppTextBold>
        </View>
    );
}

const styles = StyleSheet.create({
    headform: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#365bd8',
        paddingBottom: 10
    },
    headbAndroid: {
      borderBottomWidth: 2
    },
    headIos: {
        borderBottomWidth: 1
    },
    text: {
        color: '#fff',
        fontSize: 26
    }
});