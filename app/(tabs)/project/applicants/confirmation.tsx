import React from "react";
import { Image, Text, View } from "react-native";

import ConfirmationIcon from "@/assets/images/confirmation.png";
import FilledButton from "@/components/FilledButton";
import { router } from "expo-router";

export default function Confirmation() {
  return (
    <View className={"flex-1 bg-background"}>
      <View
        className={"mt-60 mb-20 mx-auto items-center flex flex-col gap-y-16"}
      >
        <Image className="h-60 w-60" source={ConfirmationIcon} />
        <Text
          className={"text-3xl font-semibold text-center w-[26rem] text-white"}
        >
          Christian Tolentino has been accepted into your project!
        </Text>
      </View>
      <FilledButton
        onPress={() => {
          router.dismissAll();
          router.push("/project/project-overview");
        }}
        title={"View Project Listing"}
      />
      <FilledButton
        onPress={() => {
          router.dismissAll();
          router.push("/project/applicants");
        }}
        filled={false}
        title={"Back to Applicant Summary"}
      />
    </View>
  );
}
