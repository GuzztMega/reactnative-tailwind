import { Pressable, Text, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantProps } from '..';

export function Item({ restaurant } : { restaurant: RestaurantProps}){

    return (
        <Pressable className='flex flex-row items-center justify-start gap-4'>
            <Image source={{ uri: restaurant.image }} className='w-20 h-20 rounded-full'/>

            <View className='flex gap-1'>

                <Text numberOfLines={2} className='text-base text-black leading-4 font-bold'>
                    {restaurant.name}
                </Text>

                <View className='flex-row items-center gap-1'>
                    <Ionicons name='star' size={14} color='#CA8A04'/>
                    <Text className='text-sm'>4.5</Text>
                </View>

            </View>
        </Pressable>
    )
}