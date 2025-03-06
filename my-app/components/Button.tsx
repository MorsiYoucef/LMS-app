import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator
} from "react-native";
import React from "react";
import { commonStyles } from "@/styles/common/common.styles";
export default function Button({
    title,
    onPress,
    buttonSpinner
}: {
    title: string;
    onPress: () => void;
    buttonSpinner: boolean; // Boolean to show spinner or not
}) {
    const { width } = Dimensions.get("window");
    return (
        <TouchableOpacity
            style={[
                commonStyles.buttonContainer,
                {
                    width: width * 1 - 150,
                    height: 40,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                },
            ]}
            onPress={() => onPress()}
        >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
                {buttonSpinner ? (
                    <ActivityIndicator size="small" color={"white"} />
                ) : (
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 16,
                            fontFamily: "Raleway_700Bold",
                        }}
                    >
                        {title}
                    </Text>
                )}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})