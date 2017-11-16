import React from 'react';
import { Text, View, Image, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    headerContent,
    thumbnailImage,
    thumbnailContainer,
    albumFonts,
    albumImage
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnailImage}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={albumFonts}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={albumImage}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <View style={{ flex: 1 }}>
          <Button
            title={`Buy ${title} album`}
            color='green'
            onPress={() => Linking.openURL(url)}
          />
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailImage: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumFonts: {
    fontSize: 18
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
