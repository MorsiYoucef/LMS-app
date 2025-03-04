import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
//   import Button from "@/components/button/button";
import { router } from "expo-router";
//   import AsyncStorage from "@react-native-async-storage/async-storage";
//   import axios from "axios";
//   import { SERVER_URI } from "@/utils/uri";
//   import { Toast } from "react-native-toast-notifications";

export default function VerifyAccountScreen() {
    const [code, setCode] = useState(new Array(4).fill(""));

    const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
    return (
        <View>
            <Text>VerifyAccountScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})