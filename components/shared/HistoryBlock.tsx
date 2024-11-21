import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import HistoryBlock from "../../data/History.json";
import HistoryStyles from "../../styles/HistoryStyles";

type History = {
    id: number;
    status: string;
    receiver_address: string;
    amount: string;
    comment: string;
    time: string;
    image: string;
};

function HistoryBlocks() {
    const [history, setHistory] = useState<History[]>([]);

    useEffect(() => {
        setHistory(HistoryBlock);
    }, []);


    const renderItem = ({ item }: { item: History }) => (
        <View key={item.id} style={HistoryStyles.historyItem}>
            <Image
                source={{ uri: item.image }}
                style={HistoryStyles.image}
            />
            <View style={HistoryStyles.leftInfo}>
                <Text style={HistoryStyles.statusText}>{item.status}</Text>
                <Text style={HistoryStyles.receiverAddress}>{item.receiver_address}</Text>
                <Text style={HistoryStyles.comment}>{item.comment}</Text>
            </View>

            <View style={HistoryStyles.rightInfo}>
                <Text style={HistoryStyles.amount}>{item.amount} </Text>
                <Text style={HistoryStyles.time}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={history}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default HistoryBlocks;
