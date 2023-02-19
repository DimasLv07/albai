import React, {useState, useRef} from 'react';
import {View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Text from './TextAlbai';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const data = [
  {
    id: 1,
    url: 'https://cf.shopee.co.id/file/7ed2878d64916f733635a5bbb6bd0cd0',
  },
  {
    id: 2,
    url: 'https://cf.shopee.co.id/file/15a4602476179607756dc6a94060cfc7',
  },
  {
    id: 3,
    url: 'https://cf.shopee.co.id/file/cb93dca64b04c46aab62c9c6eba09865',
  },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: item.url}}
          style={{width: '100%', height: 350, zIndex: -10}}
        />
      </View>
    );
  };
  return (
    <View>
      <Carousel
        autoplay
        loop
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        containerStyle={{position: 'absolute', bottom: -14, right: 0, left: 0}}
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          zIndex: 10,
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default App;
