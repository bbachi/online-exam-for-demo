import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SvgXml  } from 'react-native-svg';

const nextArrow = `
<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5 66.4166C15.3289 66.3967 0.603299 51.6711 0.583344 33.5V32.8416C0.945201 14.7524 15.8389 0.346167 33.9301 0.586209C52.0214 0.82625 66.5276 15.6226 66.4094 33.715C66.2912 51.8075 51.5929 66.413 33.5 66.4166ZM33.5 7.16664C18.9565 7.16664 7.16668 18.9565 7.16668 33.5C7.16668 48.0435 18.9565 59.8333 33.5 59.8333C48.0435 59.8333 59.8334 48.0435 59.8334 33.5C59.817 18.9632 48.0367 7.18297 33.5 7.16664ZM33.5 49.9583L28.8588 45.3171L37.3513 36.7916H17.0417V30.2083H37.3513L28.8588 21.6829L33.5 17.0416L49.9583 33.5L33.5 49.9583Z" fill="#56CCF2"/>
</svg>
`;

export default function  Footer() {
    
        return (
            <View style={styles.footerWrapper} >
                <SvgXml xml={nextArrow} />
            </View>
         );
}

const styles = StyleSheet.create({
    footerWrapper: {
         alignSelf: 'flex-end',
         marginTop: 20,
    },
});
