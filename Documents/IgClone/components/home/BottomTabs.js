import { useState } from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active:
      "https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=000000",
    inactive:
      "https://img.icons8.com/?size=100&id=e7OGIAvKdpQo&format=png&color=000000",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/?size=100&id=7695&format=png&color=000000",
    inactive: "https://img.icons8.com/?size=100&id=132&format=png&color=000000",
  },
  {
    name: "Add",
    active: "https://img.icons8.com/?size=100&id=38113&format=png&color=000000",
    inactive:
      "https://img.icons8.com/?size=100&id=dviuFeWyguPJ&format=png&color=000000",
  },
  {
    name: "Reals",
    active:
      "https://img.icons8.com/?size=100&id=YoIaSvIehcuI&format=png&color=000000",
    inactive:
      "https://img.icons8.com/?size=100&id=PxI9IPCyBAOD&format=png&color=000000",
  },
  {
    name: "Account",
    active: "https://img.icons8.com/?size=100&id=98957&format=png&color=000000",
    inactive:
      "https://img.icons8.com/?size=100&id=teAmm8wzAnK7&format=png&color=000000",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const IconBottom = ({ icon }) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{
            uri: activeTab === icon.name ? icon.active : icon.inactive,
          }}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <IconBottom key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0,1%",
    zIndex: 999,
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  profilePic: {},
});

export default BottomTabs;
