import React, {useState} from 'react';

import {Card, Paragraph} from 'react-native-paper';

import {ImagesAssets} from '../assets/ImagesAssets';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from './TextAlbai';

import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';

var styles = require('./style/styles');
const getRandomNumber = () => {
  return Math.floor(Math.random() * 15 + 12);
};

export const HeaderWithSearchBar = props => {
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');
  const [back, setBack] = useState(props.back);

  const nav = useNavigation();
  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerContainer}>
        {back && (
          <TouchableOpacity onPress={() => nav.goBack()}>
            <Icon size={25} name={'arrow-back'} />
          </TouchableOpacity>
        )}
        <View style={[styles.inputContainerHeader, props.style]}>
          <TouchableOpacity>
            <Text style={{marginLeft: 5}}>
              {' '}
              <Icon name={'search'} size={19} color="#232323" />
            </Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.textInputHeader, styles.nunitoSans]}
            onChangeText={value => handlerSearch(value)}
            placeholder={'Search here...'}
            value={search}
            enablesReturnKeyAutomatically
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity
          onPress={() => nav.navigate('KeranjangScreen')}
          style={styles.iconHeader}>
          <Text>
            {' '}
            <Icon name={'cart-outline'} size={32} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Profile')}>
          <Text style={styles.iconHeader}>
            {' '}
            <IconAwesome name={'user-o'} size={27} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.headerContainer, {marginBottom: -10, marginLeft: -11}]}>
        <Text style={styles.iconHeaderBottom}>
          {' '}
          <Icon name={'location-outline'} size={15} color="#232323" />
        </Text>
        <Text style={{fontSize: 11}}>Tambah alamat</Text>
        <Text style={[styles.iconHeaderBottom, {marginTop: 5}]}>
          {' '}
          <IconMaterial
            name={'keyboard-arrow-down'}
            size={15}
            color="#232323"
          />
        </Text>
      </TouchableOpacity>
      {props.home ? (
        <View></View>
      ) : (
        <TouchableOpacity
          onPress={() => nav.navigate('Home')}
          style={{
            marginRight: 18,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 10,
            right: 0,
          }}>
          <IconAwesome color="black" size={20} name={'home'} />
          <Text style={{marginLeft: 5}}>Go to home</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const CardCategoryDetail = props => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('CategoryDetail')}
      style={stylePribadi.cardCategories}>
      <ImageBackground style={stylePribadi.cardCategories} source={props.image}>
        <View style={stylePribadi.textImageCardCategories}>
          <Text
            style={[
              stylePribadi.textImageCardCategoriesColor,
              styles.nunitoSans,
            ]}>
            {props.name}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export const ChatBox = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('ChatDetail')}
      style={{flexDirection: 'row', marginBottom: 15}}>
      <View
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
          backgroundColor: 'black',
          marginRight: 10,
        }}
      />
      <View
        style={{
          borderBottomColor: '#D7D7D7',
          borderBottomWidth: 2,
          width: '70%',
          marginRight: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#282828',
            paddingBottom: 5,
          }}>
          I-Box
        </Text>
        <Text style={{paddingBottom: 10, fontSize: 11, color: '#9C9C9C'}}>
          Info stock maseh
        </Text>
      </View>
      <View>
        <Text>08.19</Text>
        <View
          style={{
            marginLeft: 5,
            width: 25,
            height: 25,
            backgroundColor: '#AC8B75',
            borderRadius: 70,
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 11,
              paddingTop: 5,
              alignSelf: 'center',
              color: 'white',
            }}>
            1
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const CardCategories = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardCategories}>
      <TouchableOpacity onPress={() => nav.navigate('CategoryDetail')}>
        <Card.Cover style={styles.cardCategoriesImage} source={props.image} />
        <Paragraph
          style={[styles.categoriesTitle, styles.nunitoSans, props.style]}>
          {props.name}
        </Paragraph>
      </TouchableOpacity>
    </Card>
  );
};

export const BintangLimaReview = () => {
  return (
    <View style={[stylePribadi.row, {width: '90%'}]}>
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
      <Image
        style={stylePribadi.bintangItemDetail}
        source={ImagesAssets.bintang}
      />
    </View>
  );
};

export const CardTabButton = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardAlbaiTab}>
      <TouchableOpacity onPress={() => nav.navigate('ItemDetail')}>
        <Card.Cover
          style={styles.cardAlbaiImageTab}
          source={{
            uri:
              'https://source.unsplash.com/random/200x200?sig=' +
              getRandomNumber(),
          }}
        />
        <View style={styles.albaiPromoContent}>
          <Paragraph
            numberOfLines={2}
            style={[styles.albaiCardTitle, styles.nunitoSans]}>
            Cosmos 17-WFG Kipas angin dingin
          </Paragraph>
          <View style={styles.albaiPromoMerahContainer}>
            <Paragraph style={[styles.albaiCardHarga, styles.nunitoSans]}>
              Rp200.000
            </Paragraph>
            <Paragraph style={[styles.empatPuluh, styles.nunitoSans]}>
              40%
            </Paragraph>
          </View>
          <Paragraph style={[styles.albaiCardHargaPromo, styles.nunitoSans]}>
            Rp200.000
          </Paragraph>
          <View style={styles.albaiLogoContainer}>
            <Image style={styles.logoAlbaiPromo} source={ImagesAssets.rumah} />
            <Paragraph style={[styles.textSampingLogoAlbai, styles.nunitoSans]}>
              Jakarta pusat
            </Paragraph>
          </View>
          <View style={styles.albaiLogoContainer}>
            <Image
              style={styles.logoAlbaiPromo}
              source={ImagesAssets.bintang}
            />
            <Paragraph style={[styles.textSampingLogoAlbai, styles.nunitoSans]}>
              4.5 | 500 Sold
            </Paragraph>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#E3CAA5',
                justifyContent: 'space-evenly',
                padding: 4,
                width: '84%',
                marginRight: 5,
                borderRadius: 5,
              }}>
              <Octicons color="#E3CAA5" name={'plus'} />
              <Text
                style={{fontSize: 11, color: '#E3CAA5', fontWeight: 'bold'}}>
                Add To Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#EF4444',
                padding: 3,
                borderRadius: 3,
              }}>
              <IconAwesome size={15} color={'#EF4444'} name={'trash-o'} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export const CardTab = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardAlbaiTab}>
      <TouchableOpacity onPress={() => nav.navigate('ItemDetail')}>
        <Card.Cover
          style={styles.cardAlbaiImageTab}
          source={ImagesAssets.exampleProductBig}
        />
        <View style={styles.albaiPromoContent}>
          <Paragraph
            numberOfLines={2}
            style={[styles.albaiCardTitle, styles.nunitoSans]}>
            Cosmos 17-WFG Kipas angin dingin
          </Paragraph>
          <View style={styles.albaiPromoMerahContainer}>
            <Paragraph style={[styles.albaiCardHarga, styles.nunitoSans]}>
              Rp200.000
            </Paragraph>
            <Paragraph style={[styles.empatPuluh, styles.nunitoSans]}>
              40%
            </Paragraph>
          </View>
          <Paragraph style={[styles.albaiCardHargaPromo, styles.nunitoSans]}>
            Rp200.000
          </Paragraph>
          <View style={styles.albaiLogoContainer}>
            <Image style={styles.logoAlbaiPromo} source={ImagesAssets.rumah} />
            <Paragraph style={[styles.textSampingLogoAlbai, styles.nunitoSans]}>
              Jakarta pusat
            </Paragraph>
          </View>
          <View style={styles.albaiLogoContainer}>
            <Image
              style={styles.logoAlbaiPromo}
              source={ImagesAssets.bintang}
            />
            <Paragraph style={[styles.textSampingLogoAlbai, styles.nunitoSans]}>
              4.5 | 500 Sold
            </Paragraph>
          </View>
          <Image
            style={styles.freeShipping}
            source={ImagesAssets.freeShipping}
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export const CardPromo = props => {
  const nav = useNavigation();
  return (
    <Card style={styles.cardAlbai}>
      <TouchableOpacity onPress={() => nav.navigate('ItemDetail')}>
        <Card.Cover
          style={styles.cardAlbaiImage}
          source={ImagesAssets.exampleProduct}
        />
        <View style={styles.albaiPromoContent}>
          <Paragraph
            numberOfLines={2}
            style={[styles.albaiCardTitle, styles.nunitoSans]}>
            Cosmos 17-WFG Kipas angin dingin
          </Paragraph>
          <View style={[styles.albaiPromoMerahContainer, styles.nunitoSans]}>
            <Paragraph style={[styles.albaiCardHarga, styles.nunitoSans]}>
              Rp200.000
            </Paragraph>
            <Paragraph style={[styles.empatPuluh, styles.nunitoSans]}>
              40%
            </Paragraph>
          </View>
          <Paragraph style={[styles.albaiCardHargaPromo, styles.nunitoSans]}>
            Rp200.000
          </Paragraph>
          <View style={[styles.albaiLogoContainer, styles.nunitoSans]}>
            <Image
              style={[styles.logoAlbaiPromo, styles.nunitoSans]}
              source={ImagesAssets.rumah}
            />
            <Paragraph style={[styles.textSampingLogoAlbai, styles.nunitoSans]}>
              Jakarta pusat
            </Paragraph>
          </View>
          <View style={styles.albaiLogoContainer}>
            <Image
              style={styles.logoAlbaiPromo}
              source={ImagesAssets.bintang}
            />
            <Paragraph style={[styles.textSampingLogoAlbai, styles.nunitoSans]}>
              4.5 | 500 Sold
            </Paragraph>
          </View>
          <Image
            style={styles.freeShipping}
            source={ImagesAssets.freeShipping}
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export const KeranjangComponent = props => {
  const [value, setValue] = useState(null);
  const [checkboxState, setCheckboxState] = useState(props.check);

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text numberOfLines={1} style={styles.textItem}>
          {item.label}
        </Text>
      </View>
    );
  };

  const [count, setCount] = useState(1);

  const countHandlerPlus = () => {
    if (count >= 0) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const countHandlerMinus = () => {
    if (count >= 1) {
      setCount(prevCount => prevCount - 1);
    }
  };
  return (
    <View>
      <View style={{marginBottom: 20}}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <BouncyCheckbox
                ref={(ref: any) => (props.ref = ref)}
                size={20}
                fillColor="#000000"
                unfillColor="#FFFFFF"
                innerIconStyle={{borderWidth: 1}}
                isChecked={checkboxState}
                disableBuiltInState
                onPress={() => setCheckboxState(!checkboxState)}
                // style={styles.checkbox}
              />
              <Image
                source={ImagesAssets.profileUser}
                style={{width: 50, height: 50}}
              />
            </View>
          </View>
          <View style={{marginLeft: 10, width: ' 67%'}}>
            <Text style={{fontSize: 11.5, fontWeight: 'bold'}}>
              Cosmos 17-WFG Kipas angin dingin A...
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 11.5, fontWeight: 'bold'}}>
                    Rp 299.000
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'rgba(255, 0, 0, 0.2)',
                      fontSize: 9,
                      padding: 3.5,
                      marginLeft: 5,
                      alignSelf: 'flex-start',
                      borderRadius: 2,
                      color: '#ff0000',
                    }}>
                    40%
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '600',
                    textDecorationLine: 'line-through',
                    color: '#525252',
                  }}>
                  Rp 299.000
                </Text>
              </View>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 35,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 2,
                paddingRight: 7,
                paddingLeft: 7,
                borderWidth: 1,
                borderColor: 'black',
                justifyContent: 'space-between',
                marginRight: 10,
                borderRadius: 5,
              }}>
              <TouchableOpacity
                onPress={countHandlerMinus}
                style={{paddingRight: 7}}>
                <IconAntDesign name={'minus'} />
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity
                onPress={countHandlerPlus}
                style={{paddingLeft: 7}}>
                <IconOcticons name={'plus'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#EF4444',
                padding: 3,
                borderRadius: 3,
              }}>
              <IconAwesome size={15} color={'#EF4444'} name={'trash-o'} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 12.5,
              fontWeight: 'bold',
              color: '#EF4444',
              marginRight: 20,
            }}>
            5 Items Left
          </Text>
        </View>
      </View>
    </View>
  );
};

const stylePribadi = StyleSheet.create({
  allCategories: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },

  imageCardCategories: {
    width: '100%',
  },

  viewCategories: {
    padding: 15,
  },

  cardCategories: {
    backgroundColor: 'black',
    flex: 1,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },

  cardCategoriesContainer: {
    marginBottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textImageCardCategories: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textImageCardCategoriesColor: {
    color: 'white',
  },

  pemisahCardCategories: {
    width: 8,
  },
  bintangItemDetail: {
    alignSelf: 'center',
    width: 15,
    height: 15,
  },

  row: {
    flexDirection: 'row',
  },
});

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
