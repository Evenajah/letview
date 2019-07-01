import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //sPlashScreen
    containerSplash: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CD5C5C',
    },

    inputBox: {
        fontFamily: 'Kanit-Light',
        width: 250,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15
    },

    buttonText: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        marginVertical: 10,

    },

    button: {
        flexDirection: 'row',
        width: 270,
        backgroundColor: '#F08080',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    buttonSign: {
        flexDirection: 'row',
        width: 270,
        backgroundColor: '#F08080',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginSocial: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    googleBtn: {
        backgroundColor: '#CC3333'
    },

    regisSocialText: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        alignSelf: 'center',
    },
    signupContext: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    flexIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupText: {
        textDecorationLine: 'underline',
        fontFamily: 'Kanit-Light',
        color: '#DCDCDC',
        fontSize: 14
    },


    //Drawer
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#CD5C5C',
        alignItems: 'center',

    },

    avatar: {
        marginVertical: 20,
        alignSelf: 'center'

    },
    avatarContainer: {
        width: '100%'

    },
    wrapDrawer: {
        width: '100%',
        height: 1,
    },
    listDrawer: {
        backgroundColor: '#FA8072',
        fontFamily: 'Kanit-Light',

    },

    textUser: {
        fontFamily: 'Kanit-Light',
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 13
    },

    //Overlay
    overlayText: {
        fontFamily: 'Kanit-Light',
        color:'white',
        alignSelf:'center',
    },

    
    overlayTextHeader: {
        fontFamily: 'Kanit-Light',
        fontSize:20,
        alignSelf:'center',
        color:'white'
    },

    overlayContent: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CD5C5C',
      
    },

    overlayBox:{
        backgroundColor:'#FA8072',
        padding:50
    },

    // VolunteerScreen
    wrapVol:{
        flex: 1,
        backgroundColor:'#FA8072',
       
    },

    wrapChart:{
        alignSelf:'center'
    },

    wrapTextVolSc:{
        padding:15,
        backgroundColor:'white',
        alignItems:'center',
        fontSize:30

    },

    textVolSc:{
        fontFamily: 'Kanit-Light',
       
    },

    //chart
    chart:{
        backgroundColor:'white',
        height:200,
        fontFamily: 'Kanit-Light',
    },


});

export default styles;