import { useState } from 'react'
import {
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList

} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import{ icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ( searchTerm, setSearchterm, handleClick ) => {
  const router = useRouter();
  const [activejobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <view style={styles.container}>
        <Text style={styles.userName}>Hello Peretz</Text>
        <Text style={styles.welcomeMessage}>Find your perrfect job</Text>

      </view>

      <view style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
           <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              placeholder="what are you searching for?"
           />

        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={ (handleClick) => { }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </view>
      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        renderItem={({ item}) => (
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() =>{
              setActiveJobType(item);
              router.push('/search/${item}')
            }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>

        )}

        keyExtractor={item => item}
        contebtContainerStyle={{ columnGap: SIZES,small}}
        horizontal
        />

      </View>
    </View>
  )
}

export default Welcome