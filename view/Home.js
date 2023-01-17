import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';

const initialLayout = {width: Dimensions.get('window').width};

const FirstRoute = () => (
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
);

const SecondRoute = () => (
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
);

const ThirdRoute = () => (
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
);

const FourthRoute = () => (
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
);

const FifthRoute = () => (
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
);

const SixthRoute = () => (
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
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
});

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');

  const nav = useNavigation();
  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'For you'},
    {key: 'second', title: 'Special Promo'},
    {key: 'third', title: 'End Year Sale'},
    {key: 'fourth', title: 'Populer'},
    {key: 'fifth', title: 'Gadgets'},
    {key: 'sixth', title: 'Great Deals'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.headerMain}>
        <View style={styles.headerContainer}>
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

          <Pressable
            onPress={() => nav.navigate('KeranjangScreen')}
            style={styles.iconHeader}>
            <Text>
              {' '}
              <Icon name={'cart-outline'} size={23} color="white" />
            </Text>
          </Pressable>
          <Pressable onPress={() => nav.navigate('Profile')}>
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
      <ScrollView style={styles.scene} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <CarouselC />
          <View style={styles.viewMainHome}>
            <View style={styles.containerCategory}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  Categories
                </Text>
                <TouchableOpacity onPress={() => nav.navigate('Categories')}>
                  <Text style={[styles.nunitoSans]}>See More</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal={true}>
                <View>
                  <View style={styles.cardCategoriesContainer}>
                    <View style={styles.cardCategoriesContainer}>
                      <CardCategories />
                      <CardCategories />
                      <CardCategories />
                      <CardCategories />
                    </View>
                  </View>
                  <View style={styles.cardCategoriesContainer1}>
                    <View style={styles.cardCategoriesContainer1}>
                      <CardCategories />
                      <CardCategories />
                      <CardCategories />
                      <CardCategories />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.containerPromo}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  Al-bai’ Promo
                </Text>
                <TouchableOpacity onPress={() => nav.navigate('Promo')}>
                  <Text style={[styles.nunitoSans]}>See More</Text>
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={styles.tabs}
          renderTabBar={props => (
            <TabBar
              {...props}
              renderLabel={({route, color}) => (
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    color: 'black',
                  }}>
                  {route.title}
                </Text>
              )}
              style={{backgroundColor: 'white'}}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
