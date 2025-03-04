import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({

    firstContainer: {
        alignItems: 'center',
    },
    group_2: {
        width: wp("55%"),
        height: hp("10%"),
    },
    group_3: {
        width: wp("16%"),
        height: hp("12%"),
        position: 'absolute',
        top: hp("78.5%"),
        right: 60
    },
    circle: {
        // width: wp("16%"),
        // height: hp("12%"),
        position: 'relative',
        left: wp("16%"),
        bottom: hp("21%")
    },

    backgroundImage: {
        width: wp("100%"),
        height: hp("100%"),
        resizeMode: 'cover', // Ensure the image covers the entire container
        justifyContent: 'center', // Center the logo vertically
        alignItems: 'center', // Center the logo horizontally
    },
    logo: {
        width: wp("100%"),
        height: hp("64%"),
        marginTop: -280,
    },
    titleWrapper: {
        flexDirection: 'column',
    },
    titleText: {
        fontSize: hp("4%"),
        textAlign: 'left',
        color: 'white',

    },
    dscpWrapper: { 
        position: 'absolute',
        bottom: hp("76%"),
        left:wp("4%"),
        zIndex:1
    },
    dscpText: {
        textAlign: 'center',
        fontSize: hp("2%"),
        color: '#575757',
    },
    btnWrapper: {
        backgroundColor: "#0E036C",
        width: wp("92%"),
        paddingVertical: 18,
        borderRadius: 100,
        marginTop: 40,
        position: 'relative',
        top: 0
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
      welcomeButtonStyle:{
        backgroundColor: "#2467EC",
        width: responsiveWidth(88),
        height: responsiveHeight(5.5),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }
})