import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import TelegramAppsData from "../../../data/TelegramApps.json";
import AppsStyles from "../../../styles/AppsStyles";

type App = {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
};

function TelegramApps() {
    const [telegramApps, setTelegramApps] = useState<App[]>([]);

    useEffect(() => {
        setTelegramApps(TelegramAppsData);
    }, []);

    const handlePress = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <View>
            <Text style={AppsStyles.textH}>Telegram Apps</Text>
            {telegramApps.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={AppsStyles.appsContainer}
                    onPress={() => handlePress(item.url)}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={AppsStyles.image}
                    />
                    <View style={AppsStyles.texts}>
                        <Text style={AppsStyles.name}>{item.name}</Text>
                        <Text style={AppsStyles.description}>{item.description}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default TelegramApps;
