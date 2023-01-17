import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Tabs, MaterialTabBar} from 'react-native-collapsible-tab-view';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardCategories, CardPromo, CardTab} from './components';
import {ScrollView as GestureHandlerScrollView} from 'react-native-gesture-handler';
import CarouselC from './Carousel';

var styles = require('./style/styles');
import {ImagesAssets} from '../assets/ImagesAssets';

const HEADER_HEIGHT = 250;

const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + '';

const stylePribadi = StyleSheet.create({
  chatNowButton: {
    borderColor: '#525252',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },

  chatNowTextStore: {
    marginLeft: 17,
    color: '#282828',
  },

  addToCartTextStore: {
    marginLeft: 17,
    color: '#AC8B75',
  },

  addToCartStore: {
    borderColor: '#AC8B75',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

const Header = () => {
  const nav = useNavigation();
  return (
    <View style={styles.header}>
      <View style={[styles.containerCategory, {paddingTop: 0}]}>
        <View style={styles.cpluss}>
          <View style={styles.albaiPromoMerahContainer}>
            <Image
              style={styles.profileToko}
              source={ImagesAssets.profileToko}
            />
            <TouchableOpacity style={styles.profileTokoText}>
              <Text style={[styles.brownText, styles.nunitoSans]}>
                I-Box Official
              </Text>
              <View style={styles.albaiPromoMerahContainer}>
                <Image
                  style={styles.lokasiLogo}
                  source={ImagesAssets.lokasiLogo}
                />
                <Text style={[styles.brownText, styles.nunitoSans]}>
                  {' '}
                  Jakarta Kota
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileTokoReview}>
          <View>
            <View style={styles.row}>
              <Image
                style={styles.bintangItemDetail}
                source={ImagesAssets.bintang}
              />
              <Text style={[styles.nunitoSans]}> 4.8</Text>
            </View>
            <Text style={[styles.textAlignCenter, styles.nunitoSans]}>
              average{'\n'}review
            </Text>
          </View>
          <View>
            <Text style={[styles.nunitoSans]}>± 1 Hour</Text>
            <Text style={[styles.textAlignCenter, styles.nunitoSans]}>
              order{'\n'}processed
            </Text>
          </View>
          <View>
            <Text style={[styles.nunitoSans]}>100%</Text>
            <Text style={[styles.textAlignCenter, styles.nunitoSans]}>
              Order{'\n'}on time
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.cartContainer]}>
        <TouchableOpacity
          onPress={() => nav.navigate('ChatList')}
          style={stylePribadi.chatNowButton}>
          <IconMaterial color="#000000" size={15} name={'chat'} />
          <Text style={stylePribadi.chatNowTextStore}>Chat</Text>
        </TouchableOpacity>

        <View style={{width: 10}}></View>
        <TouchableOpacity style={stylePribadi.addToCartStore}>
          <IconMaterialCommunity color="#AC8B75" size={15} name={'plus'} />
          <Text style={stylePribadi.addToCartTextStore}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StoreDetail: React.FC = () => {
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');
  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };
  const nav = useNavigation();
  const renderItem: ListRenderItem<number> = React.useCallback(({index}) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={[styles.headerMain, {zIndex: 10}]}>
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
      <Tabs.Container
        renderTabBar={props => (
          <MaterialTabBar
            {...props}
            indicatorStyle={{backgroundColor: '#AC8B75'}}
          />
        )}
        renderHeader={Header}
        headerHeight={HEADER_HEIGHT} // optional
      >
        <Tabs.Tab name="Store" label="Store">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerPromo}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  Al-bai’ Promo
                </Text>
                <TouchableOpacity onPress={() => nav.navigate('Promo')}>
                  <Text style={[styles.nunitoSans]}>See More</Text>
                </TouchableOpacity>
              </View>
              <GestureHandlerScrollView
                horizontal
                style={styles.cardAlbaiContainer}>
                <View style={styles.cardAlbaiContainer}>
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                </View>
              </GestureHandlerScrollView>
            </View>
            <CarouselC />
            <View style={styles.containerPromo}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  Top Seller
                </Text>
                <TouchableOpacity onPress={() => nav.navigate('Promo')}>
                  <Text style={[styles.nunitoSans]}>See More</Text>
                </TouchableOpacity>
              </View>
              <GestureHandlerScrollView
                horizontal
                style={styles.cardAlbaiContainer}>
                <View style={styles.cardAlbaiContainer}>
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                  <CardPromo />
                </View>
              </GestureHandlerScrollView>
            </View>
            <View style={styles.containerP}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#282828',
                  fontWeight: 'bold',
                  marginBottom: 15,
                }}>
                Recomendation
              </Text>
              <View style={styles.containerPP}>
                <CardTab />
                <CardTab />
              </View>
              <View style={styles.containerPP}>
                <CardTab />
                <CardTab />
              </View>
            </View>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Product" label="Product">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Text style={{marginTop: 220, alignSelf: 'center'}}>
                Under Development
              </Text>
            </View>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="Categories" label="Categories">
          <Tabs.ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Text style={{marginTop: 220, alignSelf: 'center'}}>
                Under Development
              </Text>
            </View>
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    </View>
  );
};

export default StoreDetail;
