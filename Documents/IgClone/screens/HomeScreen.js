import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { ScrollView } from "react-native";
import { Posts } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView>
        <Stories />
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default HomeScreen;
