import React, {useState} from 'react';
import Text from './TextAlbai';

import {
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
import {ImagesAssets} from '../assets/ImagesAssets';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  CardCategories,
  CardPromo,
  CardTab,
  HeaderWithSearchBar,
} from './components';
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
      <HeaderWithSearchBar home={true} style={{width: '70%'}} />
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
                  <Text style={[styles.nunitoSans, {color: '#AC8B75'}]}>
                    See more <AntDesign name={'right'} />
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal={true}>
                <View>
                  <View style={styles.cardCategoriesContainer}>
                    <View style={styles.cardCategoriesContainer}>
                      <CardCategories
                        image={ImagesAssets.foodCategory}
                        name="Foods"
                      />
                      <CardCategories
                        image={ImagesAssets.computerCategory}
                        name="Computer & Accesories"
                        style={{paddingTop: 0}}
                      />
                      <CardCategories
                        image={ImagesAssets.handphoneCategory}
                        style={{paddingTop: 0}}
                        name="Handphone & Accesories"
                      />
                      <CardCategories
                        image={ImagesAssets.manFashionCategory}
                        name="Man Fashion"
                      />
                      <CardCategories
                        image={ImagesAssets.womanFashionCategory}
                        name="Woman Fashion"
                      />
                    </View>
                  </View>
                  <View style={styles.cardCategoriesContainer1}>
                    <View style={styles.cardCategoriesContainer1}>
                      <CardCategories
                        image={ImagesAssets.beautyCategory}
                        name="Cosmetic & Beauty "
                      />
                      <CardCategories
                        image={ImagesAssets.homeApplianceCategory}
                        name="Home appliances"
                      />
                      <CardCategories
                        image={ImagesAssets.muslimCategory}
                        name="Muslim Fashion"
                      />
                      <CardCategories
                        image={ImagesAssets.sportCategory}
                        name="Sports"
                      />
                      <CardCategories
                        image={ImagesAssets.otomativeCategory}
                        name="Otomative"
                      />
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={styles.tabs}
          renderTabBar={props => (
            <TabBar
              {...props}
              activeColor={'#000'}
              inactiveColor={'red'}
              renderLabel={({route, color, focused}) => {
                if (focused) {
                  return (
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 10,
                        color: 'black',
                      }}>
                      {route.title}
                    </Text>
                  );
                } else {
                  return (
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 10,
                        color: 'black',
                        opacity: 0.3,
                      }}>
                      {route.title}
                    </Text>
                  );
                }
              }}
              indicatorStyle={{backgroundColor: '#AC8B75'}}
              style={{backgroundColor: 'white'}}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
