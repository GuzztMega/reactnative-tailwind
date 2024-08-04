import { View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";

import Constants from "expo-constants";
import { TrendingFoods } from "../components/trending";
import { Famous } from "../components/famous";
import { Restaurants } from "../components/restaurants";

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
        <Search />
        <Banner />

        <Section 
          name={"Pedidos em Alta"} 
          label={"Ver mais"} 
          size={"text-2xl"} 
          action={() => console.log('entrou em APERITIVOS')} 
        />
        <TrendingFoods />

        <Section 
          name={"Famosos no iFeed"} 
          label={"Conhecer"} 
          size={"text-lg"} 
          action={() => console.log('entrou em FAMOSOS')} 
        />
        <Famous />

        <Section 
          name={"Restaurantes"} 
          label={"Ver todos"} 
          size={"text-lg"} 
          action={() => console.log('entrou em RESTAURANTES')} 
        />
        <Restaurants />

      </View>

    </ScrollView>
  );
}
