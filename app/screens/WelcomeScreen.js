import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, View, ViewComponent, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
    
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/Logo.png")}/>
        </View>
        <View style={styles.loginButton}>
            <Text style={{ 
                fontSize: 24,
                color:colors.white
            }}
            >Login</Text>
        </View>
        <View style={styles.registerButton}>
            <Text style={{ 
                fontSize: 24,
                color:colors.white
            }}>Register</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: colors.background,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
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
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default WelcomeScreen;