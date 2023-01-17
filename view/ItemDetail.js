import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';

import {CardPromo, BintangLimaReview} from './components';

import {ImagesAssets} from '../assets/ImagesAssets';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

// import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');

import CarouselCc from './CarouselBig';

const ItemDetail = () => {
  const [search, setSearch] = useState('');
  const [emailError, setEmailError] = useState('');
  const handlerSearch = val => {
    setSearch(val);
    setEmailError(null);
  };
  const nav = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerMain}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => nav.goBack()}>
            <IconIon size={25} name={'arrow-back'} />
          </Pressable>
          <View style={styles.inputContainerHeader}>
            <Pressable>
              <Text style={{marginLeft: 5}}>
                {' '}
                <IconIon name={'search'} size={19} color="#232323" />
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
              <IconIon name={'cart-outline'} size={23} color="white" />
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
            <IconIon name={'location-outline'} size={20} color="#232323" />
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
                <ScrollView
                  style={styles.filterContainerScroll}
                  horizontal={true}>
                  <TouchableOpacity
                    style={styles.filterButtonHightLightItemDetail}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                        {color: 'black'},
                      ]}>
                      Black
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterButton}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                      ]}>
                      Soft White
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterButton}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                      ]}>
                      Silver
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterButton}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                      ]}>
                      Rose Gold
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View>
                <View style={styles.cpluss}>
                  <Text style={[styles.textCategories, styles.nunitoSans]}>
                    Type:
                  </Text>
                  <Text>3 Variants</Text>
                </View>
                <ScrollView
                  style={styles.filterContainerScroll}
                  horizontal={true}>
                  <TouchableOpacity
                    style={styles.filterButtonHightLightItemDetail}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                        {color: 'black'},
                      ]}>
                      64/4
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterButton}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                      ]}>
                      128/4
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterButton}>
                    <Text
                      style={[
                        styles.filterTextButtonHightLight,
                        styles.nunitoSans,
                      ]}>
                      128/6
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
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
              <Text style={[styles.brownText, styles.nunitoSans]}>
                Read More
              </Text>
            </View>
            <View style={[styles.containerCategory, {paddingTop: 0}]}>
              <View style={styles.cpluss}>
                <View style={styles.albaiPromoMerahContainer}>
                  <Image
                    style={styles.profileToko}
                    source={ImagesAssets.profileToko}
                  />
                  <TouchableOpacity
                    onPress={() => nav.navigate('StoreDetail')}
                    style={styles.profileTokoText}>
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
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={[styles.filterTextButton, styles.nunitoSans]}>
                    Follow
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
            <View style={[styles.containerCategory]}>
              <View style={styles.cpluss}>
                <Text style={[styles.textCategories, styles.nunitoSans]}>
                  More from this store
                </Text>
                <Text style={[styles.nunitoSans]}>See more</Text>
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
            </View>
            <Text style={[styles.seeAllReview, styles.brownText]}>
              See All Reviews
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
      </ScrollView>
      <View style={[styles.row, styles.cartContainer]}>
        <TouchableOpacity
          style={styles.chatNowButton}
          onPress={() => nav.navigate('StoreDetail')}>
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
