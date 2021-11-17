import React from "react";
import { View } from "react-native";

import {
    PageLogo, PageTitle
} from './../component/style';
const Login = () => {
    return <View>
        <PageLogo resizeMode="cover" source={require('./../assets/gaach.png')}/>
        <PageTitle> Poribesh Bondhu </PageTitle>
    </View>;
}

export default Login;