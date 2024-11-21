import { Pressable, PressableProps, Text, View, Image } from "react-native";
import NavigButtonStyles from "../../styles/NavigButtonStyles";

export function NavigButton({text, ...props}: PressableProps & {text: string }) {
  return (
    <Pressable {...props}>
      <View style={NavigButtonStyles.buttonBlock}>
        <Image
          style={NavigButtonStyles.image}
          source={require('../../assets/Icons/Circle.webp')}      
        />
        <Text style={NavigButtonStyles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}
