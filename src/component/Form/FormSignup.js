import React from 'react';
import { Text, View, TextInput, TouchableOpacity, YellowBox, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

//stylesheet
import styles from '../../styles';

//timeStamp
import moment from 'moment';



export default class FormSignin extends React.Component {

    constructor(props) {
        super(props);

        YellowBox.ignoreWarnings(['Setting a timer']);

        //setState
        this.state = {
            passwordConfirm: '',
            password: '',
            email: '',
        }

        //bind func

    }


    onSignupPress = () => {

        //checkpassword
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        //timestamp
        const today = Date.now();
        const date = moment(today).format("MMMM Do YYYY, h:mm:ss a");


        //createUser
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                
                //add data in db
                firebase
                    .database()
                    .ref(`/users/${response.user.uid}/personaldata`)
                    .update({
                        email: this.state.email,
                        account_type: "email",
                        created_at: date,
                        last_logged_in: date,
                        profile_picture:'http://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/red-user-icon.png'
                    })

                Alert.alert("Success!", "Succesfully Signup");

            }, (error) => {

                Alert.alert("Warning!", error.message);

            });
    }

    render() {

        return (

            <View style={styles.container}>


                {/*InputForm*/}


                <View style={styles.viewInput}>
                    <Icon
                        name='envelope'
                        type='font-awesome'
                        color='#ffffff'
                        size={20}
                        paddingHorizontal={5}

                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid='#ffffff'
                        placeholder='Email'
                        placeholderTextColor='#ffffff'
                        onChangeText={email => this.setState({ email })}
                    />
                </View>



                <View style={styles.viewInput}>
                    <Icon
                        name='lock'
                        type='font-awesome'
                        color='#ffffff'
                        size={25}
                        paddingHorizontal={5}

                    />
                    <TextInput style={styles.inputBox}
                        placeholder='Password'
                        underlineColorAndroid='#ffffff'
                        placeholderTextColor='#ffffff'
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>


                <View style={styles.viewInput}>
                    <Icon
                        name='check-circle'
                        type='font-awesome'
                        color='#ffffff'
                        size={20}
                        paddingHorizontal={5}

                    />
                    <TextInput style={styles.inputBox}
                        placeholder='Confirm Password'
                        underlineColorAndroid='#ffffff'
                        placeholderTextColor='#ffffff'
                        textContentType='emailAddress'
                        secureTextEntry={true}
                        onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                    />
                </View>


                <Text>
                    {"\n"}
                </Text>

                <TouchableOpacity onPress={this.onSignupPress} style={styles.buttonSign}  >
                    {/*ICON*/}
                    <Icon
                        name='user-plus'
                        type='font-awesome'
                        color='#ffffff'
                        size={20}
                        paddingHorizontal={7}
                    />

                    <Text style={styles.buttonText}>
                        สมัครสมาชิก
                    </Text>

                </TouchableOpacity>

            </View>


        );
    }
}

