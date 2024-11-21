import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import SwapAppsData from "../../../data/SwapApps.json";
import AppsStyles from "../../../styles/AppsStyles";

type App = {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
};

function SwapApps() {
    const [swapApps, setSwapApps] = useState<App[]>([]);

    useEffect(() => {
        setSwapApps(SwapAppsData);
    }, []);

    const handlePress = (url: string) => {
        Linking.openURL(url);
    };


    return (
        <View>
            <Text style={AppsStyles.textH}>Swap Apps</Text>
            {swapApps.map((item) => (
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

export default SwapApps;
