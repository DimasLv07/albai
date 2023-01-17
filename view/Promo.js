import React, {useState} from 'react';

import {ImagesAssets} from '../assets/ImagesAssets';

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import {CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import IconMaterial from 'react-native-vector-icons/MaterialIcons';

var styles = require('./style/styles');

const PromoScreen = () => {
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');
  const nav = useNavigation();

  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerMain}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => nav.goBack()}>
            <Icon size={25} name={'arrow-back'} />
          </Pressable>

          <View style={styles.inputContainerHeader}>
            <Pressable>
              <Text style={{marginLeft: 5}}>
                {' '}
                <Icon name={'search'} size={19} color="#232323" />
              </Text>
            </Pressable>
            <TextInput
              style={[styles.textInputHeader, styles.nunitoSans]}
              onChangeText={value => handlerSearch(value)}
              placeholder={'Search here...'}
              value={search}
              enablesReturnKeyAutomatically
              autoCapitalize="none"
            />
          </View>

          <Pressable style={styles.iconHeader}>
            <Text>
              {' '}
              <Icon name={'cart-outline'} size={23} color="white" />
            </Text>
          </Pressable>
          <Pressable>
            <Text style={styles.iconHeader}>
              {' '}
              <IconAwesome name={'user-o'} size={20} color="white" />
            </Text>
          </Pressable>
        </View>

        <TouchableOpacity style={[styles.headerContainer, {marginBottom: -10}]}>
          <Text style={styles.iconHeaderBottom}>
            {' '}
            <Icon name={'location-outline'} size={20} color="#232323" />
          </Text>
          <Text>Tambah alamat</Text>
          <Text style={[styles.iconHeaderBottom, {marginTop: 5}]}>
            {' '}
            <IconMaterial
              name={'keyboard-arrow-down'}
              size={20}
              color="#232323"
            />
          </Text>
        </TouchableOpacity>
      </View>
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
            <ScrollView style={styles.filterContainerScroll} horizontal={true}>
              <TouchableOpacity style={styles.filterButtonHightLight}>
                <Text
                  style={[
                    styles.filterTextButtonHightLight,
                    styles.nunitoSans,
                  ]}>
                  Foods
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={[styles.filterTextButton, styles.nunitoSans]}>
                  Fashion
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={[styles.filterTextButton, styles.nunitoSans]}>
                  Sport
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={[styles.filterTextButton, styles.nunitoSans]}>
                  Otomotive
                </Text>
              </TouchableOpacity>
            </ScrollView>
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
