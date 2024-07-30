import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";

import Constants from "expo-constants";

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      {/* full width; padding-horizonatal: 4px; */}
      <View className="w-full px-4" style={{ marginTop: Constants.statusBarHeight + 10 }}>
        <Header />
        <Banner />
      </View>

    </ScrollView>
  );
}
