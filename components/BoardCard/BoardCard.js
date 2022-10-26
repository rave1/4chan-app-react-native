import React, { useEffect, useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";

const BoardCard = (props) => {

    const buttonPress = (url) => {
        ToastAndroid.showWithGravity(
            url,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        )
    }

    return (
        <View
            style={{
                backgroundColor: '#4c2c72',
                marginBottom: 10,
                padding: 10
            }}
        >
            <TouchableOpacity onPress={() => buttonPress(props.board)}>
                <Text style={styles.text}>
                        {props.board}
                    </Text>
                    <Text style={styles.text}>
                        {props.description}
                    </Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#F5EFFF'
    }
})

export default BoardCard;
