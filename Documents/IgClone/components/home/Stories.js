import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Users, IUser } from "../../data/users";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

const Stories = () => {
  return (
    <View style={{ paddingBottom: 15, paddingTop: 5 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>
          <Image style={styles.avatar} source={IUser.image} />
          <View style={styles.btnAdd}>
            <Icons name="plus" size={15} color="#fff" />
          </View>
          <View style={styles.username}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 12,
                color: "#000",
              }}
            >
              Your Story
            </Text>
          </View>
        </TouchableOpacity>
        {Users.filter((user) => IUser.user !== user.user).map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <LinearGradient
              style={styles.gradientBorder}
              colors={["#c62f90", "#db3072", "#f19d4c"]}
              start={{ x: 0.75, y: 0.25 }}
              end={{ x: 0.25, y: 0.75 }}
            >
              <Image source={item?.image} style={styles.story} />
            </LinearGradient>
            <Text style={{ color: "black" }}>
              {item.user.length > 10
                ? item.user.slice(0, 10).toLowerCase() + "..."
                : item.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 5,
    borderRadius: 50,
  },
  imageContainer: {
    backgroundColor: "white",
    overflow: "hidden",
    alignItems: "center",
    paddingLeft: 5,
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    paddingLeft: 6,
  },
  container: {
    marginHorizontal: 5,
    position: "relative",
  },
  username: {
    maxWidth: 64,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    height: 78,
    width: 70,
  },
  btnAdd: {
    position: "absolute",
    bottom: 17.5,
    right: -2.5,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#318bfb",
  },
});

export default Stories;
