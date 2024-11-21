import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import AssetsWallet from "../../data/Assets.json";
import AssetsStyles from "../../styles/Assets";

type Asset = {
    id: number;
    name: string;
    balance: string;
    balance_usd: string;
    price_token: string;
    percent_change: string;
    image: string;
};

function Assets() {
    const [assets, setAssets] = useState<Asset[]>([]);

    useEffect(() => {
        setAssets(AssetsWallet);
    }, []);

    const renderItem = ({ item }: { item: Asset }) => (
        <View key={item.id} style={AssetsStyles.assetContainer}>
            <Image
                source={{ uri: item.image }}
                style={AssetsStyles.image}
            />
            <View style={AssetsStyles.leftInfo}>
                <Text style={AssetsStyles.nameAsset}>{item.name}</Text>
                <View style={AssetsStyles.leftInfoBottom}>
                    <Text style={AssetsStyles.priceTokenAsset}>{item.price_token}</Text>
                    <Text style={AssetsStyles.percentChangeAsset}>{item.percent_change}</Text>
                </View>
            </View>

            <View style={AssetsStyles.rightInfo}>
                <Text style={AssetsStyles.balanceAsset}>{item.balance}</Text>
                <Text style={AssetsStyles.balanceUsdAsset}>{item.balance_usd}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={assets}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default Assets;
