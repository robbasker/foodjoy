import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from "react-native";
import colors from "../config/colors";


function OnboardingPlan(props) {
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/Logo.png")}/>
            <Text>Plan ahead</Text>
            <Text>Test change Intelligent food planner designed to match your tastes and preferences. change this</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: colors.background
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: "absolute",
        top: 220,
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
    },
});

export default OnboardingPlan;