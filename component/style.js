import styled from "styled-components";
import {View, Image, Text} from 'react-native';
import { Constants } from "expo-constants";
//colours

export const Colors = {
    halka_green: '#FFE8F5E9',
    medium_green: '#FFC8E6C9',
    garo_green: '#7CFC00'
}

const { halka_green, medium_green, garo_green} = Colors;


export const PageLogo = styled.Image`
    width: 200px;
    height: 200px;
    align-self: center;
    
`;

export const PageTitle = styled.Text`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: green;
`