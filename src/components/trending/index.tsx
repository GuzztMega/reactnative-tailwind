import { useState, useEffect } from 'react';
import { FlatList } from 'react-native'; 
import { CardHorizontalFood } from './food'; 

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restauranteId: string;
}

export function TrendingFoods(){

    const [foods, setFoods] = useState<FoodProps[]>([]);

    useEffect(() => {
        async function getFoods(){
            const response = await fetch(`http://192.168.0.213:3000/foods`);
            const data = await response.json();
            setFoods(data);
        }

        getFoods();
    }, []);

    return (
        <FlatList 
            data={foods} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={ ({item}) => <CardHorizontalFood food={item} /> } 
            contentContainerStyle={{ gap: 14, paddingHorizontal: '2%'}}
        />
    )
}