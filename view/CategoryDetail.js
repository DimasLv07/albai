import React, {useState} from 'react';
import Text from './TextAlbai';

import {
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';

import {CardPromo, CardTab, HeaderWithSearchBar} from './components';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

var styles = require('./style/styles');
import CarouselC from './Carousel';

const DATAFILTER = [
  {
    id: 'bd7ac123123dbea-c1b1-4fsdf6c2-aed5-3ad53abb28ba',
    title: 'Foods',
  },
  {
    id: '3ac68afc-c623gerg05-48d3-a4123f8-fbd91aa97f63',
    title: 'Fashion',
  },
  {
    id: 'asd-3sdfsd4da1-4743531f-bd96-1455adaas71e29d72',
    title: 'Sport',
  },
  {
    id: '58694a0f-3da1e-471f-bd9234234fsd6-145571e29d72',
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

const CategoryDetail = () => {
  const [selectedIdFilter, setSelectedIdFilter] = useState(
    'bd7ac123123dbea-c1b1-4fsdf6c2-aed5-3ad53abb28ba',
  );

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
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');
  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };
  const nav = useNavigation();
  return (
    <View style={{flex: 1}}>
      <HeaderWithSearchBar home={true} back={true} />
      <ScrollView style={styles.scene}>
        <View style={styles.container}>
          <CarouselC />
          <View style={styles.viewMainHome}>
            <View style={styles.containerCategory}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  Top seller
                </Text>
                <TouchableOpacity onPress={() => nav.navigate('Promo')}>
                  <Text style={[styles.nunitoSans, {color: '#AC8B75'}]}>
                    See more <AntDesign name={'right'} />
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal={true} style={styles.cardAlbaiContainer}>
                <View style={styles.cardAlbaiContainer}>
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={[styles.containerCategory, {marginBottom: -5}]}>
          <View style={(styles.cpluss, {marginBottom: -20})}>
            <Text style={[styles.textCategories, styles.nunitoSans]}>
              Choose your Sports needs
            </Text>
          </View>
        </View>
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
        <View style={styles.containerP}>
          <View style={styles.containerPP}>
            <CardTab />
            <CardTab />
          </View>
          <View style={styles.containerPP}>
            <CardTab />
            <CardTab />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryDetail;
