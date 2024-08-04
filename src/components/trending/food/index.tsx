import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FoodProps } from '..';

export function CardHorizontalFood({food}: { food: FoodProps }){
    
    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <Pressable className='relative flex flex-col rounded-xl'>
            <Image source={{ uri: food.image }} className='w-44 h-36 rounded-3xl'/>

            <View className='absolute flex flex-row rounded-full bg-neutral-900/80 gap-1 top-2 right-3 px-2 py-1 items-center justify-center'>
                <Ionicons name='star' size={14} color='#CA8A04'/>
                <Text className='text-white text-sm'>
                    {food.rating}
                </Text>
            </View>

            <Text className='text-green-700 font-medium text-lg'>
                {formatCurrency(food.price)}
            </Text>

            <Text className='text-black mt-1'>
                {food.name}
            </Text>

            <Text className='text-neutral-600 text-sm'>
                {food.time} - {formatCurrency(food.delivery)}
            </Text>
        </Pressable>
    )
}