import React from 'react';

import {Card, Paragraph} from 'react-native-paper';

import {ImagesAssets} from '../assets/ImagesAssets';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';

var styles = require('./style/styles');
const getRandomNumber = () => {
  return Math.floor(Math.random() * 15 + 12);
};

export const CardCategoryDetail = props => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('CategoryDetail')}
      style={stylePribadi.cardCategories}>
      <ImageBackground
        style={stylePribadi.cardCategories}
        source={ImagesAssets.categoriesCardImage}>
        <View style={stylePribadi.textImageCardCategories}>
          <Text
            style={[
              stylePribadi.textImageCardCategoriesColor,
              styles.nunitoSans,
            ]}>
            Foods
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
        <Card.Cover
          style={styles.cardCategoriesImage}
          source={{
            uri:
              'https://source.unsplash.com/random/200x200?sig=' +
              getRandomNumber(),
          }}
        />
        <Paragraph style={[styles.categoriesTitle, styles.nunitoSans]}>
          Food
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
