import React from 'react'
import { View, Text,image } from 'react-native'

import styles from './company.style'
import { icons} from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, Location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
            ? companyLogo
            : 'htttps://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NNiCW7diNnGXJFMicpY9eXHKV4sqzO5H.jpg'
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View sytle={styles.locationBox}>
          <Image
             source={icons.location}
             resizeMode="contain"
             style={styles.locationImage}
          />
          <Text style={styles.locationName}>{Location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company