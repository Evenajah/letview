import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { Font } from 'expo';

//import component
import Logo from '../component/Logo';
import FormSignup from '../component/FormSignup';
import Footer from '../component/Footer';

export default class Signup extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Kanit-Light': require('../../assets/fonts/Kanit-Light.ttf')
        });

        this.setState({ fontLoaded: true });
    }


    //Action => Route.js
    loginPage() {
        Actions.login()
    }



    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <FormSignup type="สมัครสมาชิก" />
                {/*link ปุ่มสมัคร*/}

                <View style={styles.signupContext}>
                    {
                        //โหลดฟ้อน
                        this.state.fontLoaded ? (
                            <TouchableOpacity style={styles.flexIcon} onPress={this.loginPage}>
                                 <Icon
                                    name='sign-in'
                                    type='font-awesome'
                                    color='#ffffff'
                                    size={15}
                                    paddingHorizontal={7}
                                />
                                <Text style={styles.signupText}>
                                    เข้าสู่ระบบ
                                </Text>
                               
                            </TouchableOpacity>
                        ) : null
                    }

                </View>

                <Footer/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CD5C5C',
    },

    signupContext: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16
    },

    flexIcon:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupText: {
        fontFamily: 'Kanit-Light',
        textDecorationLine : 'underline',
        color: '#DCDCDC',
        fontSize: 14,
    },
});