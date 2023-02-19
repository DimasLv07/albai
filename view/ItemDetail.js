import React, {useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';

import {CardPromo, BintangLimaReview, HeaderWithSearchBar} from './components';
import Text from './TextAlbai';

import {ImagesAssets} from '../assets/ImagesAssets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');

import CarouselCc from './CarouselBig';

const DATACOLOUR = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Black',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Soft White',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Silver',
  },
  {
    id: '58694a0f-3da1e-471f-bd96-145571e29d72',
    title: 'Rose Gold',
  },
];

const DATATYPE = [
  {
    id: 'bd7acSDFSDbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '64/4',
  },
  {
    id: '3ac6SDF8afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '128/4',
  },
  {
    id: '586SD94a0f-3da1-471f-bd96-145571e29d72',
    title: '128/6',
  },
];

const TypesItemDetail = ({
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

const ColourTypesItemDetail = ({
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

const ItemDetail = () => {
  const [follow, setFollow] = useState('Follow');
  const [followBackgroundColor, setFollowBackgroundColor] = useState(false);
  const [followTextColor, setfollowTextColor] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isShowAllReview, setIsShowAllReview] = useState(false);
  const handlerIsShowAllreview = () => {
    setIsShowAllReview(true);
  };
  const handlerIsShowAllreview1 = () => {
    setIsShowAllReview(false);
  };
  const handlreIsReadMore = () => {
    if (isReadMore === false) {
      setIsReadMore(true);
    } else {
      setIsReadMore(false);
    }
  };
  const handlerFollow = () => {
    if (follow === 'Follow') {
      setFollow('Unfollow');
      setFollowBackgroundColor(true);
      setfollowTextColor(true);
    } else {
      setFollow('Follow');
      setFollowBackgroundColor(false);
      setfollowTextColor(false);
    }
  };
  const [selectedIdColour, setSelectedIdColour] = useState(
    'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  );
  const [selectedIdTypes, setSelectedIdTypes] = useState(
    'bd7acSDFSDbea-c1b1-46c2-aed5-3ad53abb28ba',
  );
  const renderItemColour = ({item}) => {
    const backgroundColor =
      item.id === selectedIdColour ? 'rgba(227, 202, 165, 0.5)' : 'white';
    const borderColor =
      item.id === selectedIdColour ? 'rgba(227, 202, 165, 1)' : 'black';

    return (
      <ColourTypesItemDetail
        item={item}
        onPress={() => setSelectedIdColour(item.id)}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
    );
  };

  const renderItemTypes = ({item}) => {
    const backgroundColor =
      item.id === selectedIdTypes ? 'rgba(227, 202, 165, 0.5)' : 'white';
    const borderColor =
      item.id === selectedIdTypes ? 'rgba(227, 202, 165, 1)' : 'black';

    return (
      <TypesItemDetail
        item={item}
        onPress={() => setSelectedIdTypes(item.id)}
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
      <HeaderWithSearchBar back={true} />

      <ScrollView style={styles.scene}>
        <View style={styles.container}>
          <CarouselCc />
          <View>
            <View style={styles.containerCategory}>
              <View style={[styles.albaiPromoMerahContainer, styles.pertama]}>
                <Text style={[styles.harga, styles.nunitoSans]}>Rp200.000</Text>
                <Image
                  style={styles.freeShipping}
                  source={ImagesAssets.freeShipping}
                />
              </View>
              <Text style={styles.nunitoSans}>
                Cosmos 17-WFG Kipas angin dingin kosmos A-1000
              </Text>
              <View style={[styles.albaiPromoMerahContainer, styles.pertama]}>
                <Text style={[styles.dibeli, styles.nunitoSans]}>
                  500 Sold |
                </Text>

                <Image
                  style={styles.bintangItemDetail}
                  source={ImagesAssets.bintang}
                />
                <Text style={styles.nunitoSans}> 4.8(72)</Text>
              </View>
            </View>
            <View style={styles.containerCategory}>
              <View>
                <View style={[styles.cpluss, {marginTop: 0}]}>
                  <Text style={[styles.textCategories, styles.nunitoSans]}>
                    Colour:
                  </Text>
                  <Text style={styles.nunitoSans}>4 Variants</Text>
                </View>
                <FlatList
                  data={DATACOLOUR}
                  horizontal
                  renderItem={renderItemColour}
                  keyExtractor={item => item.id}
                  extraData={selectedIdColour}
                />
              </View>
              <View>
                <View style={styles.cpluss}>
                  <Text style={[styles.textCategories, styles.nunitoSans]}>
                    Type:
                  </Text>
                  <Text>3 Variants</Text>
                </View>
                <FlatList
                  data={DATATYPE}
                  horizontal
                  renderItem={renderItemTypes}
                  keyExtractor={item => item.id}
                  extraData={selectedIdTypes}
                />
              </View>
            </View>
            <View style={styles.containerCategory}>
              <Text style={[styles.titleProduct, styles.nunitoSans]}>
                Product Description
              </Text>
              <View style={styles.titleProductSatu}>
                <Text style={styles.nunitoSans}>
                  Brand: <Text style={styles.brownText}>Apple</Text>
                </Text>
                <Text style={styles.nunitoSans}>
                  Category: <Text style={styles.brownText}>Handphone</Text>
                </Text>
                <View style={[styles.albaiPromoMerahContainer, styles.pertama]}>
                  <Image
                    style={styles.checkBrown}
                    source={ImagesAssets.checkBrown}
                  />
                  <Text style={[styles.brownText, styles.nunitoSans]}>
                    {' '}
                    1 Year official warranty
                  </Text>
                </View>
                <Text>
                  Send from:{' '}
                  <Text style={[styles.brownText, styles.nunitoSans]}>
                    Jakarta Kota
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#D7D7D7',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginBottom: 10,
                }}
              />
              <Text style={[styles.productDescDesc, styles.nunitoSans]}>
                Phone 13 Pro Max. Pembaruan sistem kamera Pro yang terbesar.
                Layar Super Retina XDR dengan ProMotion untuk penggunaan yang
                terasa lebih cepat dan responsif. Chip A15 Bionic yang secepat
                kilat. Desain kokoh dan kekuatan baterai terbaik yang pernah ada
                di iPhone.(1) Isi Kotak
              </Text>
              {isReadMore ? (
                <Text style={[styles.productDescDesc, styles.nunitoSans]}>
                  Pembaruan sistem kamera Pro yang terbesar. Layar Super Retina
                  XDR dengan ProMotion untuk penggunaan yang terasa lebih cepat
                  dan responsif.
                  <TouchableOpacity onPress={handlreIsReadMore}>
                    <Text style={[styles.brownText, styles.nunitoSans]}>
                      Show Less
                    </Text>
                  </TouchableOpacity>
                </Text>
              ) : (
                <TouchableOpacity
                  style={{marginLeft: -3}}
                  onPress={handlreIsReadMore}>
                  <Text style={[styles.brownText, styles.nunitoSans]}>
                    {' '}
                    Read More
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={[styles.containerCategory, {paddingTop: 0}]}>
              <View style={styles.cpluss}>
                <TouchableOpacity
                  onPress={() => nav.navigate('StoreDetail')}
                  style={styles.albaiPromoMerahContainer}>
                  <Image
                    style={styles.profileToko}
                    source={ImagesAssets.profileToko}
                  />
                  <View style={styles.profileTokoText}>
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
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handlerFollow}
                  style={[
                    styles.filterButton,
                    {
                      backgroundColor: followBackgroundColor
                        ? '#AC8B75'
                        : 'white',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.filterTextButton,
                      styles.nunitoSans,
                      {
                        color: followTextColor ? 'white' : '#AC8B75',
                      },
                    ]}>
                    {follow}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.profileTokoReview}>
                <View>
                  <View style={styles.row}>
                    <Image
                      style={styles.bintangItemDetail}
                      source={ImagesAssets.bintang}
                    />
                    <Text
                      style={[
                        styles.nunitoSans,
                        {fontWeight: 'bold', fontSize: 17, color: '#282828'},
                      ]}>
                      {' '}
                      4.8
                    </Text>
                  </View>
                  <Text style={[styles.textAlignCenter, styles.nunitoSans]}>
                    average{'\n'}review
                  </Text>
                </View>
                <View style={{borderColor: '#D7D7D7', borderLeftWidth: 1}} />
                <View>
                  <Text
                    style={[
                      styles.nunitoSans,
                      {fontWeight: 'bold', fontSize: 16, color: '#282828'},
                    ]}>
                    ± 1 Hour
                  </Text>
                  <Text style={[styles.textAlignCenter, styles.nunitoSans]}>
                    order{'\n'}processed
                  </Text>
                </View>
                <View style={{borderColor: '#D7D7D7', borderLeftWidth: 1}} />
                <View>
                  <Text
                    style={[
                      styles.nunitoSans,
                      {fontWeight: 'bold', fontSize: 16, color: '#282828'},
                    ]}>
                    100%
                  </Text>
                  <Text style={[styles.textAlignCenter, styles.nunitoSans]}>
                    Order{'\n'}on time
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.containerCategory]}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  More from this store
                </Text>
                <TouchableOpacity onPress={() => nav.navigate('StoreDetail')}>
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
            <View
              style={[styles.containerCategory, {backgroundColor: '#FAFAFA'}]}>
              <Text style={[styles.nunitoSans, styles.reviewText]}>Review</Text>
              <View style={styles.row}>
                <Image
                  style={styles.bintangItemDetail}
                  source={ImagesAssets.bintang}
                />
                <Text style={[styles.nunitoSans]}>4.8 (72 reviews)</Text>
              </View>
              <View style={styles.containerHighReview}>
                <Text
                  style={[
                    styles.textCategories,
                    styles.nunitoSans,
                    {marginBottom: 2},
                  ]}>
                  Most helpful review
                </Text>
                <View style={styles.rowJauh}>
                  <BintangLimaReview />

                  <Text style={[styles.nunitoSans, {marginRight: 5}]}>0</Text>
                  <Icon name={'thumbs-o-up'} />
                </View>

                <Image
                  style={styles.profileUser}
                  source={ImagesAssets.profileUser}
                />
                <Text style={[styles.komenUser, styles.nunitoSans]}>
                  Kondisi aman, pengirim cepat dan tidak ada gangguan, barang
                  seperti di display, Bintang 5 lah....
                </Text>
                <Text style={[styles.tanggalUserKome, styles.nunitoSans]}>
                  20 Descember 2022 By User123
                </Text>
              </View>
              <View style={styles.reviewUser}>
                <View style={styles.rowJauh}>
                  <BintangLimaReview />
                  <Text style={[styles.nunitoSans, {marginRight: 5}]}>0</Text>
                  <Icon name={'thumbs-o-up'} />
                </View>
                <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                  20 Descember 2022 By User123
                </Text>
                <View
                  style={{
                    borderBottomColor: '#D7D7D7',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View style={styles.reviewUser}>
                <View style={styles.rowJauh}>
                  <BintangLimaReview />
                  <Text style={[styles.nunitoSans, {marginRight: 5}]}>0</Text>
                  <Icon name={'thumbs-o-up'} />
                </View>
                <Text style={[styles.komenUser, styles.nunitoSans]}>
                  Kondisi aman, pengirim cepat dan tidak ada gangguan, barang
                  seperti di display, Bintang 5 lah....
                </Text>
                <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                  20 Descember 2022 By User123
                </Text>
                <View
                  style={{
                    borderBottomColor: '#D7D7D7',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 10,
                  }}
                />
              </View>
              <View style={styles.reviewUser}>
                <View style={styles.rowJauh}>
                  <BintangLimaReview />
                  <Text style={[styles.nunitoSans, {marginRight: 5}]}>0</Text>
                  <Icon name={'thumbs-o-up'} />
                </View>
                <Image
                  style={styles.profileUser}
                  source={ImagesAssets.profileUser}
                />
                <Text style={[styles.komenUser, styles.nunitoSans]}>
                  Kondisi aman, pengirim cepat dan tidak ada gangguan, barang
                  seperti di display, Bintang 5 lah....
                </Text>
                <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                  20 Descember 2022 By User123
                </Text>
                <View
                  style={{
                    borderBottomColor: '#D7D7D7',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginBottom: 10,
                  }}
                />
              </View>
              {isShowAllReview ? (
                <View>
                  <View style={styles.reviewUser}>
                    <View style={styles.rowJauh}>
                      <BintangLimaReview />
                      <Text style={[styles.nunitoSans, {marginRight: 5}]}>
                        0
                      </Text>
                      <Icon name={'thumbs-o-up'} />
                    </View>
                    <Image
                      style={styles.profileUser}
                      source={ImagesAssets.profileUser}
                    />
                    <Text style={[styles.komenUser, styles.nunitoSans]}>
                      Kondisi aman, pengirim cepat dan tidak ada gangguan,
                      barang seperti di display, Bintang 5 lah....
                    </Text>
                    <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                      20 Descember 2022 By User123
                    </Text>
                    <View
                      style={{
                        borderBottomColor: '#D7D7D7',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: 10,
                      }}
                    />
                  </View>
                  <View style={styles.reviewUser}>
                    <View style={styles.rowJauh}>
                      <BintangLimaReview />
                      <Text style={[styles.nunitoSans, {marginRight: 5}]}>
                        0
                      </Text>
                      <Icon name={'thumbs-o-up'} />
                    </View>
                    <Text style={[styles.komenUser, styles.nunitoSans]}>
                      Kondisi aman, pengirim cepat dan tidak ada gangguan,
                      barang seperti di display, Bintang 5 lah....
                    </Text>
                    <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                      20 Descember 2022 By User123
                    </Text>
                    <View
                      style={{
                        borderBottomColor: '#D7D7D7',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: 10,
                      }}
                    />
                  </View>
                  <View style={styles.reviewUser}>
                    <View style={styles.rowJauh}>
                      <BintangLimaReview />
                      <Text style={[styles.nunitoSans, {marginRight: 5}]}>
                        0
                      </Text>
                      <Icon name={'thumbs-o-up'} />
                    </View>
                    <Text style={[styles.komenUser, styles.nunitoSans]}>
                      Kondisi aman, pengirim cepat dan tidak ada gangguan,
                      barang seperti di display, Bintang 5 lah....
                    </Text>
                    <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                      20 Descember 2022 By User123
                    </Text>
                    <View
                      style={{
                        borderBottomColor: '#D7D7D7',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: 10,
                      }}
                    />
                  </View>
                  <View style={styles.reviewUser}>
                    <View style={styles.rowJauh}>
                      <BintangLimaReview />
                      <Text style={[styles.nunitoSans, {marginRight: 5}]}>
                        0
                      </Text>
                      <Icon name={'thumbs-o-up'} />
                    </View>
                    <Text style={[styles.komenUser, styles.nunitoSans]}>
                      Kondisi aman, pengirim cepat dan tidak ada gangguan,
                      barang seperti di display, Bintang 5 lah....
                    </Text>
                    <Text style={[styles.nunitoSans, styles.tanggalReview]}>
                      20 Descember 2022 By User123
                    </Text>
                    <View
                      style={{
                        borderBottomColor: '#D7D7D7',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginBottom: 10,
                      }}
                    />
                  </View>
                </View>
              ) : (
                <View></View>
              )}
            </View>

            {isShowAllReview ? (
              <TouchableOpacity
                style={{marginLeft: -3}}
                onPress={handlerIsShowAllreview1}>
                <Text style={[styles.seeAllReview, styles.brownText]}>
                  See Less Reviews
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{marginLeft: -3}}
                onPress={handlerIsShowAllreview}>
                <Text style={[styles.seeAllReview, styles.brownText]}>
                  See All Reviews
                </Text>
              </TouchableOpacity>
            )}

            <View
              style={{
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.row, styles.cartContainer]}>
        <TouchableOpacity
          style={styles.chatNowButton}
          onPress={() => nav.navigate('ChatDetail')}>
          <IconMaterial color="#AC8B75" size={15} name={'chat'} />
          <Text style={styles.chatNowText}>Chat Now</Text>
        </TouchableOpacity>

        <View style={{width: 10}}></View>
        <TouchableOpacity style={styles.addToCart}>
          <IconMaterial color="white" size={15} name={'add-shopping-cart'} />
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetail;
