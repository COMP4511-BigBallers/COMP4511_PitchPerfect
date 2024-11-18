import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import React from "react";

interface TitleInputProps {
  text?: any;
  setText?: (text: any) => void;
  placeholder: string;
  padding?: string;
  maxLength?: number;
  includeCounter?: boolean;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  heading?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  marginBottom?: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
}

const CustomTextInput: React.FC<TitleInputProps> = ({
  text = "",
  setText = () => {},
  placeholder,
  children,
  heading,
  leftIcon,
  rightIcon,
  padding = "pb-0",
  maxLength,
  includeCounter = false,
  width = "w-4/5",
  height = "h-16",
  marginBottom = "",
  keyboardType = "default",
  editable = true,
}) => {
  return (
    <React.Fragment>
      <View className={`${width} mx-auto ${marginBottom}`}>
        {heading ? (
          <Text className={"text-white text-3xl mx-auto mb-3 ml-0"}>
            {heading}
          </Text>
        ) : null}
        <View className="relative">
          {leftIcon && (
            <View className={"absolute left-3 top-3"}>{leftIcon}</View>
          )}
          <TextInput
            keyboardType={keyboardType}
            style={{ fontSize: 20 }}
            className={`${
              leftIcon ? "pl-14" : "pl-4"
            } border text-left text-white ${editable ? "border-gray-400" : "border-[#444444]"} ${height} text-2xl rounded-2xl ${padding} w-full color-white border border-gray-400 rounded-2xl text-xl`}
            onChangeText={(newText) => {
              if (maxLength) {
                if (newText.length >= maxLength) return;
              }
              setText(newText);
            }}
            value={text}
            placeholder={placeholder}
            maxLength={maxLength}
            editable={editable}
          />
        </View>
        {includeCounter && (
          <Text className={"text-white text-lg ml-auto"}>
            {text.length}/{maxLength}
          </Text>
        )}
        <View className={"absolute top-3 right-3"}>{rightIcon}</View>
        {children}
      </View>
    </React.Fragment>
  );
};

export default CustomTextInput;
