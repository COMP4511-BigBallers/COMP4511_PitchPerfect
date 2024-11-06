import { Button, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="text-white">Edit login.tsx to edit this screen.</Text>
      <Button
        title="Login"
        onPress={() => router.replace("/tabs/home" as any)}
      />
    </View>
  );
}
