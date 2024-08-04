import { View, Text, Pressable, FlatList } from 'react-native'; 
import { useState, useEffect } from 'react';
import { Item } from './item';

export interface RestaurantProps{
    id: string;
    name: string;
    image: string;
}

export function Restaurants(){

    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants(){
            const response = await fetch(`http://192.168.0.213:3000/restaurants`);
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, []);

    return (
        <FlatList 
            data={restaurants} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={ ({item}) => <Item restaurant={item} /> } 
            contentContainerStyle={{ gap: 14, paddingHorizontal: '2%'}}
        />
    )
}