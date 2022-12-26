import React from 'react';
import Carousel from 'react-native-banner-carousel';
import {Image, View, Dimensions} from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 360;
const getRandomNumber = () => {
  return Math.floor(Math.random() * 15 + 12);
};

const images = [
  'https://source.unsplash.com/random/200x200?sig=' + getRandomNumber(),
  'https://source.unsplash.com/random/200x200?sig=' + getRandomNumber(),
  'https://source.unsplash.com/random/200x200?sig=' + getRandomNumber(),
];

class CarouselCc extends React.Component {
  static defaultProps = {
    customWidth: Dimensions.get('window').width / 2.0,
  };

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth, height: BannerHeight}}
          source={{uri: image}}
        />
      </View>
    );
  }

  render() {
    return (
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}>
        {images.map((image, index) => this.renderPage(image, index))}
      </Carousel>
    );
  }
}

export default CarouselCc;
