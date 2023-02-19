import React, {useState} from 'react';

import {ImagesAssets} from '../assets/ImagesAssets';
import Text from './TextAlbai';

import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import {CardTab, HeaderWithSearchBar} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

var styles = require('./style/styles');

const DATAFILTER = [
  {
    id: 'bd7acbea-c1b1-4fsdf6c2-aed5-3ad53abb28ba',
    title: 'Foods',
  },
  {
    id: '3ac68afc-c605-48d3-a4123f8-fbd91aa97f63',
    title: 'Fashion',
  },
  {
    id: 'asd-3da1-4743531f-bd96-1455adaas71e29d72',
    title: 'Sport',
  },
  {
    id: '58694a0f-3da1e-471f-bd96-145571e29d72',
    title: 'Otomotive',
  },
  
];

const FilterPromo = ({
  item,
  onPress,
  borderColor,
  backgroundColor,
  textColor,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.filterButtonHightLightItemDetail,
      {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        marginRight: 10,
      },
    ]}>
    <Text
      style={[
        styles.filterTextButtonHightLight,
        styles.nunitoSans,
        {
          color: 'black',
        },
      ]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const PromoScreen = () => {
  const [selectedIdFilter, setSelectedIdFilter] = useState(
    'bd7acbea-c1b1-4fsdf6c2-aed5-3ad53abb28ba',
  );
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');
  const nav = useNavigation();

  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };

  const renderItemFilter = ({item}) => {
    const backgroundColor =
      item.id === selectedIdFilter ? 'rgba(227, 202, 165, 0.5)' : 'white';
    const borderColor =
      item.id === selectedIdFilter ? 'rgba(227, 202, 165, 1)' : 'black';

    return (
      <FilterPromo
        item={item}
        onPress={() => setSelectedIdFilter(item.id)}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderWithSearchBar home={true} back={true} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.imagePromoBanner}
            source={ImagesAssets.imageBannerExample}
          />

          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterTitle}>
              <Text style={[styles.filterText, styles.nunitoSans]}>Filter</Text>
            </TouchableOpacity>
            <FlatList
              data={DATAFILTER}
              horizontal
              renderItem={renderItemFilter}
              keyExtractor={item => item.id}
              extraData={selectedIdFilter}
            />
          </View>
          <View style={styles.containerP2}>
            <View style={styles.containerPP}>
              <CardTab />
              <CardTab />
            </View>
            <View style={styles.containerPP}>
              <CardTab />
              <CardTab />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PromoScreen;
