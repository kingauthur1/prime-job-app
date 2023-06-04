import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer( selectedJob, item)}>
        <Image
           source={{ uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              :'htttps://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NNiCW7diNnGXJFMicpY9eXHKV4sqzO5H.jpg'
             }}
           resizeMode="contain"
           style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <view style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
          </Text>
          <Text style={styles.location}>{item.job_country}</Text>
      </view>
    </TouchableOpacity>
  )
}

export default PopularJobCard