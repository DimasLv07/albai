import React, {useState, useEffect} from 'react';
import Text from './TextAlbai';

import {
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImagesAssets} from '../assets/ImagesAssets';
import {SelectCountry} from 'react-native-element-dropdown';
import {KeranjangComponent} from './components';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DropDownPicker from 'react-native-dropdown-picker';

import {CardCategories, CardPromo, CardTab} from './components';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {useNavigation} from '@react-navigation/native';
var styles = require('./style/styles');
import CarouselC from './Carousel';
const local_data = [
  {
    value: '1',
    lable: 'Country 1',
  },
  {
    value: '2',
    lable: 'Country 2',
  },
  {
    value: '3',
    lable: 'Country 3',
  },
  {
    value: '4',
    lable: 'Country 4',
  },
  {
    value: '5',
    lable: 'Country 5',
  },
];

const KeranjangScreen: React.FC<Props> = (_props, {reload}) => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);

  const [checked, setChecked] = useState(false);
  const checkedAsli = React.useRef(checked);
  const [country, setCountry] = useState('1');
  const [count, setCount] = useState(1);

  const checkAllHandler = () => {
    setCheckboxState(!checkboxState);
  };

  useEffect(() => {
    console.log(checked);
  }, [checked]);

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

  let count1 = 1;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor: 'white', padding: 10, marginTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginBottom: 12}}>
              <BouncyCheckbox
                size={20}
                fillColor="#000000"
                unfillColor="#FFFFFF"
                innerIconStyle={{borderWidth: 1}}

                // style={styles.checkbox}
              />
              <Image
                source={ImagesAssets.rumah}
                style={{width: 20, height: 20, marginRight: 10}}
              />
              <Text>I-Box</Text>
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderLeftWidth: 1,
                  borderLeftColor: '#D7D7D7',
                }}
              />
              <Text>Jakarta Kota</Text>
            </View>
            <IconMaterialCommunity size={18} name={'dots-vertical'} />
          </View>
          <KeranjangComponent func={checkAllHandler} ref={bouncyCheckboxRef} />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginTop: 10,
            zIndex: -10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginBottom: 12}}>
              <BouncyCheckbox
                size={20}
                fillColor="#000000"
                unfillColor="#FFFFFF"
                innerIconStyle={{borderWidth: 1}}

                // style={styles.checkbox}
              />
              <Image
                source={ImagesAssets.rumah}
                style={{width: 20, height: 20, marginRight: 10}}
              />
              <Text>I-Box</Text>
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderLeftWidth: 1,
                  borderLeftColor: '#D7D7D7',
                }}
              />
              <Text>Jakarta Kota</Text>
            </View>
            <IconMaterialCommunity size={18} name={'dots-vertical'} />
          </View>
          <KeranjangComponent func={checkAllHandler} ref={bouncyCheckboxRef} />
          <KeranjangComponent ref={bouncyCheckboxRef} />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginTop: 10,
            zIndex: -11,
            marginBottom: 100,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', marginBottom: 12}}>
              <BouncyCheckbox
                size={20}
                fillColor="#000000"
                unfillColor="#FFFFFF"
                innerIconStyle={{borderWidth: 1}}

                // style={styles.checkbox}
              />
              <Image
                source={ImagesAssets.rumah}
                style={{width: 20, height: 20, marginRight: 10}}
              />
              <Text>I-Box</Text>
              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  borderLeftWidth: 1,
                  borderLeftColor: '#D7D7D7',
                }}
              />
              <Text>Jakarta Kota</Text>
            </View>
            <IconMaterialCommunity size={18} name={'dots-vertical'} />
          </View>
          <KeranjangComponent ref={bouncyCheckboxRef} />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BouncyCheckbox
            size={20}
            fillColor="#000000"
            unfillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 1}}
            onPress={() => bouncyCheckboxRef?.onPress()}
            // style={styles.checkbox}
          />
          <Text style={{marginLeft: -8, fontSize: 12}}>Check All Items</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#525252', marginRight: 5}}>Total</Text>
          <Text style={{color: '#AC8B75', marginRight: 5}}>Rp 299.000</Text>
          <TouchableOpacity
            style={{
              padding: 10,
              paddingLeft: 15,
              paddingRight: 15,
              backgroundColor: '#AC8B75',
              borderRadius: 7,
            }}>
            <Text style={{color: 'white'}}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KeranjangScreen;
