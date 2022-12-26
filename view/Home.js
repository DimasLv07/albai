import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {CardCategories, CardPromo, CardTab} from './components';

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
  const nav = useNavigation();
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
    <View style={styles.hagemon}>
      <ScrollView style={styles.scene} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <CarouselC />
          <View style={styles.viewMainHome}>
            <View style={styles.cpluss}>
              <Text style={styles.textCategories}>Categories</Text>
              <TouchableOpacity onPress={() => nav.navigate('Categories')}>
                <Text>See More</Text>
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
            <View style={styles.cpluss}>
              <Text style={styles.textCategories}>Al-bai’ Promo</Text>
              <TouchableOpacity onPress={() => nav.navigate('Promo')}>
                <Text>See More</Text>
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
