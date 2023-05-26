import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const OptionItem = ({ bgColor, icon, label, onPress }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={[styles.shadow, { width: 70, height: 60 }]}>
                <LinearGradient
                    style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: 'red' }]}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.white,
                            width: 30,
                            height: 30,
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const Home = ({ navigation }) => {

    // Dummy Data
    const [destinations, setDestinations] = React.useState([
        {
            id: 0,
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id: 1,
            name: "Climbing Hills",
            img: images.climbingHills,
        },
        {
            id: 2,
            name: "Frozen Hills",
            img: images.frozenHills,
        },
        {
            id: 3,
            name: "Beach",
            img: images.beach,
        },
    ]);

    const [items, setItems] = React.useState([]);

    const getItems = () => {
        return fetch('http://10.80.24.57:5000/items')
            .then(response => response.json())
            .then(json => {
                setItems(json.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    getItems();

    // Render

    function renderItems(item, index) {
        return (
            <View
                style={[ styles.shadow , {justifyContent: 'center', padding: 15, textAlign: "left", marginHorizontal: SIZES.base, width: "100%", height:50 , borderColor: COLORS.primary }]}
                onPress={() => { alert(item.name) }}
            >
                <Text style={{ marginTop: SIZES.base / 2, textAlign: "left" , ...FONTS.h4}}>{item.name}</Text>
            </View>
        )
    }

    function renderDestinations(item, index) {
        var destinationStyle = {};

        if (index == 0) {
            destinationStyle = { marginLeft: SIZES.padding, }
        }

        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
                onPress={() => { navigation.navigate("DestinationDetail") }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 5
                    }}
                />

                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4, width: "100%", borderColor: "red" }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {/* Banner */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding, }}>
                <Image
                    source={images.onboardingImage}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 5,
                    }}
                />
            </View>

            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label="Flight"
                        onPress={getItems}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#fddf90', '#fcda13']}
                        label="Train"
                        onPress={() => { console.log("Train") }}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label="Bus"
                        onPress={() => { console.log("Bus") }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label="Taxi"
                        onPress={() => { console.log("Taxi") }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label="Hotel"
                        onPress={() => { console.log("Hotel") }}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label="Eats"
                        onPress={() => { console.log("Eats") }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['#7be993', '#46caaf']}
                        label="Adventure"
                        onPress={() => { console.log("Adventure") }}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label="Event"
                        onPress={() => { console.log("Event") }}
                    />
                </View>
            </View>

            {/* Destination */}
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: 0, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Destination</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    data={destinations}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>

            {/* Items */}
            <View style={{ flex: 1, paddingLeft: 13, paddingRight: 13 }}>
                <Text style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Items</Text>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={true}
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderItems(item, index)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#3e3e3e",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Home;
