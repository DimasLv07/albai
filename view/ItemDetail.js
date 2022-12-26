import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {CardPromo, BintangLima} from './components';

import {ImagesAssets} from '../assets/ImagesAssets';

// import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');

import CarouselCc from './CarouselBig';

const ItemDetail = () => {
  return (
    <ScrollView style={styles.scene}>
      <View style={styles.container}>
        <CarouselCc />
        <View style={stylePribadi.content}>
          <View style={[styles.albaiPromoMerahContainer, stylePribadi.pertama]}>
            <Text style={stylePribadi.harga}>Rp200.000</Text>
            <Image
              style={stylePribadi.freeShipping}
              source={ImagesAssets.freeShipping}
            />
          </View>
          <Text>Cosmos 17-WFG Kipas angin dingin kosmos A-1000</Text>
          <View style={[styles.albaiPromoMerahContainer, stylePribadi.pertama]}>
            <Text style={stylePribadi.dibeli}>500 Sold |</Text>

            <Image
              style={stylePribadi.bintangItemDetail}
              source={ImagesAssets.bintang}
            />
            <Text> 4.8(72)</Text>
          </View>
          <View>
            <View style={styles.cpluss}>
              <Text style={styles.textCategories}>Colour:</Text>
              <Text>4 Variants</Text>
            </View>
            <ScrollView style={styles.filterContainerScroll} horizontal={true}>
              <TouchableOpacity style={styles.filterButtonHightLight}>
                <Text style={styles.filterTextButtonHightLight}>Black</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterTextButton}>Soft White</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterTextButton}>Silver</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterTextButton}>Rose Gold</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View>
            <View style={styles.cpluss}>
              <Text style={styles.textCategories}>Type:</Text>
              <Text>3 Variants</Text>
            </View>
            <ScrollView style={styles.filterContainerScroll} horizontal={true}>
              <TouchableOpacity style={styles.filterButtonHightLight}>
                <Text style={styles.filterTextButtonHightLight}>64/4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterTextButton}>128/4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterTextButton}>128/6</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={stylePribadi.productDesc}>
            <Text style={stylePribadi.titleProduct}>Product Description</Text>
            <View style={stylePribadi.titleProductSatu}>
              <Text>
                Brand: <Text style={styles.brownText}>Apple</Text>
              </Text>
              <Text>
                Category: <Text style={styles.brownText}>Handphone</Text>
              </Text>
              <View
                style={[styles.albaiPromoMerahContainer, stylePribadi.pertama]}>
                <Image
                  style={stylePribadi.checkBrown}
                  source={ImagesAssets.checkBrown}
                />
                <Text style={styles.brownText}> 1 Year official warranty</Text>
              </View>
              <Text>
                Send from: <Text style={styles.brownText}>Jakarta Kota</Text>
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
            <Text style={stylePribadi.productDescDesc}>
              Phone 13 Pro Max. Pembaruan sistem kamera Pro yang terbesar. Layar
              Super Retina XDR dengan ProMotion untuk penggunaan yang terasa
              lebih cepat dan responsif. Chip A15 Bionic yang secepat kilat.
              Desain kokoh dan kekuatan baterai terbaik yang pernah ada di
              iPhone.(1) Isi Kotak
            </Text>
            <Text style={styles.brownText}>Read More</Text>
          </View>
          <View>
            <View style={styles.cpluss}>
              <View style={styles.albaiPromoMerahContainer}>
                <Image
                  style={stylePribadi.profileToko}
                  source={ImagesAssets.profileToko}
                />
                <View style={stylePribadi.profileTokoText}>
                  <Text style={styles.brownText}>I-Box Official</Text>
                  <View style={styles.albaiPromoMerahContainer}>
                    <Image
                      style={stylePribadi.lokasiLogo}
                      source={ImagesAssets.lokasiLogo}
                    />
                    <Text style={styles.brownText}> Jakarta Kota</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterTextButton}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={stylePribadi.profileTokoReview}>
              <View>
                <View style={stylePribadi.row}>
                  <Image
                    style={stylePribadi.bintangItemDetail}
                    source={ImagesAssets.bintang}
                  />
                  <Text> 4.8</Text>
                </View>
                <Text style={stylePribadi.textAlignCenter}>
                  average{'\n'}review
                </Text>
              </View>
              <View>
                <Text>± 1 Hour</Text>
                <Text style={stylePribadi.textAlignCenter}>
                  order{'\n'}processed
                </Text>
              </View>
              <View>
                <Text>100%</Text>
                <Text style={stylePribadi.textAlignCenter}>
                  Order{'\n'}on time
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cpluss}>
            <Text style={styles.textCategories}>More from this store</Text>
            <Text>See more</Text>
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
          <Text>Review</Text>
          <View style={stylePribadi.row}>
            <Image
              style={stylePribadi.bintangItemDetail}
              source={ImagesAssets.bintang}
            />
            <Text>4.8 (72 reviews)</Text>
          </View>
          <View style={stylePribadi.containerHighReview}>
            <Text style={styles.textCategories}>Most helpful review</Text>
            <BintangLima />
            <Image
              style={stylePribadi.profileUser}
              source={ImagesAssets.profileUser}
            />
            <Text style={stylePribadi.komenUser}>
              Kondisi aman, pengirim cepat dan tidak ada gangguan, barang
              seperti di display, Bintang 5 lah....
            </Text>
            <Text style={stylePribadi.tanggalUserKome}>
              20 Descember 2022 By User123
            </Text>
          </View>
          <View style={stylePribadi.reviewUser}>
            <View style={stylePribadi.rowJauh}>
              <BintangLima />
              <Text>0</Text>
            </View>
            <Text>20 Descember 2022 By User123</Text>
            <View
              style={{
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          </View>
          <View style={stylePribadi.reviewUser}>
            <View style={stylePribadi.rowJauh}>
              <BintangLima />
              <Text>0</Text>
            </View>
            <Text>
              Kondisi aman, pengirim cepat dan tidak ada gangguan, barang
              seperti di display, Bintang 5 lah....
            </Text>
            <Text>20 Descember 2022 By User123</Text>
            <View
              style={{
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          </View>
          <View style={stylePribadi.reviewUser}>
            <View style={stylePribadi.rowJauh}>
              <BintangLima />
              <Text>0</Text>
            </View>
            <Image
              style={stylePribadi.profileUser}
              source={ImagesAssets.profileUser}
            />
            <Text>
              Kondisi aman, pengirim cepat dan tidak ada gangguan, barang
              seperti di display, Bintang 5 lah....
            </Text>
            <Text>20 Descember 2022 By User123</Text>
            <View
              style={{
                borderBottomColor: '#D7D7D7',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginBottom: 10,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const stylePribadi = StyleSheet.create({
  bintangItemDetail: {
    alignSelf: 'center',
    width: 15,
    height: 15,
  },

  komenUser: {
    fontSize: 11,
  },

  containerHighReview: {
    marginTop: 10,
    padding: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1,
  },

  profileTokoText: {
    marginLeft: 10,
  },

  rowJauh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tanggalUserKome: {
    fontSize: 9,
  },

  profileUser: {
    marginTop: 15,
    width: 45,
    height: 45,
    borderRadius: 5,
    marginBottom: 5,
  },

  textAlignCenter: {
    textAlign: 'center',
  },

  profileTokoReview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  profileToko: {
    width: 43,
    height: 43,
  },

  row: {
    flexDirection: 'row',
  },

  lokasiLogo: {
    width: 7.5,
    alignSelf: 'center',
    height: 11,
  },

  productDescDesc: {
    marginBottom: 5,
  },

  titleProductSatu: {
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    padding: 15,
  },

  titleProduct: {
    fontWeight: 'bold',
    color: 'black',
  },

  productDesc: {
    marginTop: 40,
  },

  harga: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  pertama: {
    alignItems: 'center',
  },

  freeShipping: {
    width: 60,
    height: 20,
  },

  checkBrown: {
    width: 13,
    height: 16,
  },
});

export default ItemDetail;
