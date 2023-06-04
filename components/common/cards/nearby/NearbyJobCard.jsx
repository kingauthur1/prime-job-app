import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({ job,handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate} >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
           source={{ uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              :'htttps://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NNiCW7diNnGXJFMicpY9eXHKV4sqzO5H.jpg'
             }}
           resizeMode="contain"
           style={styles.logoImage}
        />
      </TouchableOpacity>
      
        <view style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
          </Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </view>
    </TouchableOpacity>
  )
}

export default NearbyJobCard