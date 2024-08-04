import { View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";

import Constants from "expo-constants";
import { TrendingFoods } from "../components/trending";

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
        <Search />

        <Section 
          name={"Melhores aperitivos"} 
          label={"Ver mais"} 
          size={"text-lg"} 
          action={() => console.log('entrou em APERITIVOS')} 
        />

        <TrendingFoods />
      </View>

    </ScrollView>
  );
}
