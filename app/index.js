import { useState } from 'react';
import {View,ScrollView,SafeAreaView, Text} from 'react-native';
import { Stack,useRouter } from 'expo-router';

import {COLORS,icons,images,SIZES} from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';


export default Home = ()=>{

    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState('');

    const handlePress = () =>{
        router.push('/payment');
     }

    return(
    <SafeAreaView style={{flex:1,bacground:COLORS.lightWhite}}>
        <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
        ),
        headerRight:()=>(
            <ScreenHeaderBtn iconUrl={images.profile} dimension="60%"/>
        ),
        headerTitle:" "
        }}/>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1,padding:SIZES.medium}}>
                <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={()=>{
                    if(searchTerm){
                        router.push(`/search/${searchTerm}`);
                    }}
                }/>
                <Popularjobs/>
                <Nearbyjobs/>
                <Text onPress={handlePress}>Go To Payments</Text>
            </View>
            
        </ScrollView>
    </SafeAreaView>
    )
}