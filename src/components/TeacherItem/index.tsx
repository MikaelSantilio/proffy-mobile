import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { RectButton } from 'react-native-gesture-handler';


function TeacherItem() {
    return (
        <View style={styles.container} >
            <View style={styles.profile} >
                <Image 
                    style={styles.avatar}
                    source={{ 
                        uri: 'https://avatars1.githubusercontent.com/u/40041499?s=460&u=b484cfea7185c43f1a07cc8ba3a75a82cdc20b27&v=4' }}
                    
                />
                <View style={styles.profileInfo} >
                    <Text style={styles.name}>Mikael Santilio</Text>
                    <Text style={styles.subject}>Matemática</Text>

                </View>
            </View>

            <Text style={styles.bio} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui 
            eros, auctor ac est in, aliquet gravida erat. Integer turpis dolor, 
            pretium vel justo ut, sollicitudin mattis leo.
            </Text>

            <View style={styles.footer} >
                <Text style={styles.price} >
                    Preço/hora {'   '}
                    <Text style={styles.priceValue} >R$ 200.00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={unfavoriteIcon}></Image> 
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactButtonText}>Contato</Text>
                    </RectButton>
                </View>
            </View>
            
        </View>
    );
}

export default TeacherItem;