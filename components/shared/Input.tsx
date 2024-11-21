import { Pressable, TextInput, TextInputProps, Image, View } from "react-native";
import React, { useState } from "react";
import BrowserStyles from "../../styles/BrowserStyles";

export function Input(props: TextInputProps) {
    
    return (
        <View>
            <TextInput 
                style={BrowserStyles.input}
                placeholderTextColor={'#ffffff'}
                {...props}
            />
            <Image
                style={BrowserStyles.image}
                source={require('../../assets/Icons/Circle.webp')}      
            />
        </View>
    )
}