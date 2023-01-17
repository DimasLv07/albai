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
  Image,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {ImagesAssets} from '../assets/ImagesAssets';

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

const KeranjangScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
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
          <View style={{marginBottom: 5}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <BouncyCheckbox
                    size={20}
                    fillColor="#000000"
                    unfillColor="#FFFFFF"
                    innerIconStyle={{borderWidth: 1}}

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
                          backgroundColor: '#FF0000',
                          opacity: 0.2,
                          fontSize: 9,
                          paddingLeft: 3,
                          paddingRight: 3,
                          marginLeft: 5,
                          alignSelf: 'flex-start',
                          borderRadius: 2,
                        }}>
                        40%
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        textDecorationLine: 'line-through',
                      }}>
                      Rp 299.000
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      marginTop: 10,
                    }}>
                    <DropDownPicker
                      open={open1}
                      setOpen={setOpen1}
                      items={items1}
                      value={value1}
                      placeholder={'test'}
                      labelStyle={{fontSize: 8}}
                      arrowSize={6}
                      style={{minHeight: 4}}
                      setValue={setValue1}
                      setItems={setItems1}
                      listMode="SCROLLVIEW"
                    />
                  </View>
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
                  <TouchableOpacity style={{paddingRight: 7}}>
                    <IconAntDesign name={'minus'} />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity style={{paddingLeft: 7}}>
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
          <View style={{marginBottom: 5}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <BouncyCheckbox
                    size={20}
                    fillColor="#000000"
                    unfillColor="#FFFFFF"
                    innerIconStyle={{borderWidth: 1}}

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
                          backgroundColor: '#FF0000',
                          opacity: 0.2,
                          fontSize: 9,
                          paddingLeft: 3,
                          paddingRight: 3,
                          marginLeft: 5,
                          alignSelf: 'flex-start',
                          borderRadius: 2,
                        }}>
                        40%
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        textDecorationLine: 'line-through',
                      }}>
                      Rp 299.000
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      marginTop: 10,
                    }}>
                    <DropDownPicker
                      open={open2}
                      setOpen={setOpen2}
                      items={items2}
                      value={value2}
                      placeholder={'test'}
                      labelStyle={{fontSize: 8}}
                      arrowSize={6}
                      style={{minHeight: 4}}
                      setValue={setValue2}
                      setItems={setItems2}
                      listMode="SCROLLVIEW"
                    />
                  </View>
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
                  <TouchableOpacity style={{paddingRight: 7}}>
                    <IconAntDesign name={'minus'} />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity style={{paddingLeft: 7}}>
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
          <View style={{marginTop: 5}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <BouncyCheckbox
                    size={20}
                    fillColor="#000000"
                    unfillColor="#FFFFFF"
                    innerIconStyle={{borderWidth: 1}}

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
                          backgroundColor: '#FF0000',
                          opacity: 0.2,
                          fontSize: 9,
                          paddingLeft: 3,
                          paddingRight: 3,
                          marginLeft: 5,
                          alignSelf: 'flex-start',
                          borderRadius: 2,
                        }}>
                        40%
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        textDecorationLine: 'line-through',
                      }}>
                      Rp 299.000
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      marginTop: 10,
                    }}>
                    <DropDownPicker
                      open={open3}
                      setOpen={setOpen3}
                      items={items3}
                      value={value3}
                      placeholder={'test'}
                      labelStyle={{fontSize: 8}}
                      arrowSize={6}
                      style={{minHeight: 4}}
                      setValue={setValue3}
                      setItems={setItems3}
                      listMode="SCROLLVIEW"
                    />
                  </View>
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
                  <TouchableOpacity style={{paddingRight: 7}}>
                    <IconAntDesign name={'minus'} />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity style={{paddingLeft: 7}}>
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
          <View style={{marginBottom: 5}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <BouncyCheckbox
                    size={20}
                    fillColor="#000000"
                    unfillColor="#FFFFFF"
                    innerIconStyle={{borderWidth: 1}}

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
                          backgroundColor: '#FF0000',
                          opacity: 0.2,
                          fontSize: 9,
                          paddingLeft: 3,
                          paddingRight: 3,
                          marginLeft: 5,
                          alignSelf: 'flex-start',
                          borderRadius: 2,
                        }}>
                        40%
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        textDecorationLine: 'line-through',
                      }}>
                      Rp 299.000
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      marginTop: 10,
                    }}>
                    <DropDownPicker
                      open={open4}
                      setOpen={setOpen4}
                      items={items4}
                      value={value4}
                      placeholder={'test'}
                      labelStyle={{fontSize: 8}}
                      arrowSize={6}
                      style={{minHeight: 4}}
                      setValue={setValue4}
                      setItems={setItems4}
                      listMode="SCROLLVIEW"
                    />
                  </View>
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
                  <TouchableOpacity style={{paddingRight: 7}}>
                    <IconAntDesign name={'minus'} />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity style={{paddingLeft: 7}}>
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
          <View style={{marginTop: 5}}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <BouncyCheckbox
                    size={20}
                    fillColor="#000000"
                    unfillColor="#FFFFFF"
                    innerIconStyle={{borderWidth: 1}}

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
                          backgroundColor: '#FF0000',
                          opacity: 0.2,
                          fontSize: 9,
                          paddingLeft: 3,
                          paddingRight: 3,
                          marginLeft: 5,
                          alignSelf: 'flex-start',
                          borderRadius: 2,
                        }}>
                        40%
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        textDecorationLine: 'line-through',
                      }}>
                      Rp 299.000
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      marginTop: 10,
                    }}>
                    <DropDownPicker
                      open={open}
                      setOpen={setOpen}
                      items={items}
                      value={value}
                      placeholder={'test'}
                      labelStyle={{fontSize: 8}}
                      arrowSize={6}
                      style={{minHeight: 4}}
                      setValue={setValue}
                      setItems={setItems}
                    />
                  </View>
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
                  <TouchableOpacity style={{paddingRight: 7}}>
                    <IconAntDesign name={'minus'} />
                  </TouchableOpacity>
                  <Text>2</Text>
                  <TouchableOpacity style={{paddingLeft: 7}}>
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

            // style={styles.checkbox}
          />
          <Text style={{marginLeft: -8, fontSize: 12}}>Check All Items</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
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
