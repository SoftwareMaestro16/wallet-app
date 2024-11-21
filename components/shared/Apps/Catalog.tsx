import React from "react";
import { View, FlatList } from "react-native";
import TelegramApps from "./TelegramApps";
import SwapApps from "./SwapApps";
import StakingApps from "./StakingApps";
import BrowserStyles from "../../../styles/BrowserStyles";

type CatalogItem = {
  id: string; 
  component: React.ReactNode; 
};

const Catalog: React.FC = () => {
  const data: CatalogItem[] = [
    { id: "telegram", component: <TelegramApps /> },
    { id: "swap", component: <SwapApps /> },
    { id: "staking", component: <StakingApps /> },
  ];

  const renderItem = ({ item }: { item: CatalogItem }) => (
    <View key={item.id}>
      {item.component}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Catalog;
