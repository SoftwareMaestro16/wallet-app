import { Pressable, PressableProps, Text, View, Image } from "react-native";
import ButtonStyles from "../../styles/ButtonStyles";
import React from "react";

export function Button({text, ...props}: PressableProps & {text: string }) {
    return (
        <Pressable {...props}>
            <View style={ButtonStyles.buttonBlock}>
                <Image
                    style={ButtonStyles.image}
                    source={require('../../assets/Icons/Circle.webp')}      
                />
                <Text style={ButtonStyles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}