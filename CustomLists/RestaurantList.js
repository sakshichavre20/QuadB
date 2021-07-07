import React, { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

export default function RestaurantList(props) {
  const [restaurant, setRestaurant] = useState([
    {
      name: "Shiv Shakti",
      title: "Chinese, Nort Indian",
      rating: "3.7",
      price: "200 for one",
      img: {
        uri: "https://i.pinimg.com/originals/e1/da/d5/e1dad5315972c8a9db86fb01d69c7ecb.jpg",
      },
      id: "1",
    },
    {
      name: "Pizza Hut",
      title: "Pizza, Fast Food",
      rating: "4.7",
      price: "200 for one",
      img: {
        uri: "https://lh3.googleusercontent.com/aNOhJuMbG5xq4L0l9leW-SCNdu-bMhg1K31JyYsium4XZi_bPECgVOm4qAEFeNQUzMr9_2EfMhhk67R3K00Ungh0D4SGKEkKP9B6K4MS=w256",
      },
      id: "2",
    },
    {
      name: "Sudhama",
      title: "Fast Food",
      rating: "4.5",
      price: "200 for one",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHezQn0m-rAbONHwFVTKI1RxBvMFK4LY20Yg&usqp=CAU",
      },
      id: "3",
    },
    {
      name: "Sahara",
      title: "Family restaurant",
      rating: "4.7",
      price: "200 for one",
      img: {
        uri: "https://www.nehascookbook.com/wp-content/uploads/2020/09/Shrad-thali-WS.jpg",
      },
      id: "4",
    },
    {
      name: "Burger Singh",
      title: "Buger, Fast Food",
      rating: "4.3",
      price: "200 for one",
      img: {
        uri: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyJTIwcG5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      id: "5",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: "bold",
          color: "#000",
          paddingLeft: 0,
        }}
      >
        2048 resturants around you
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={restaurant}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <View style={styles.surface}>
                <ImageBackground
                  imageStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  style={{
                    width: "100%",
                    height: 170,
                    justifyContent: "space-between",
                  }}
                  source={item.img}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10,
                    }}
                  >
                    <View
                      style={{
                        opacity: 0.6,
                        backgroundColor: "black",
                        height: 15,
                        width: 70,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 12 }}>
                        Promoted
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 28,
                        width: 28,
                        borderRadius: 60,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                      }}
                    >
                      <Feather name="bookmark" size={18} color="black" />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingRight: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "dodgerblue",
                        justifyContent: "center",
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        width: 75,
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="brightness-percent"
                        size={11}
                        color="white"
                      />
                      <FontAwesome
                        name="rupee"
                        size={11}
                        color="white"
                        style={{ marginLeft: 5 }}
                      />
                      <Text
                        style={{
                          paddingLeft: 0,
                          fontSize: 11,
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        75 OFF
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                        width: 50,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          fontWeight: "700",
                          color: "#000",
                          paddingLeft: 5,
                        }}
                      >
                        30 mins
                      </Text>
                    </View>
                  </View>
                </ImageBackground>

                {/*------------------------------- text in card part1----------------------------------*/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    height: 28,
                    width: "100%",
                    paddingHorizontal: 10,
                    paddingTop: 5,
                    backgroundColor: "white",
                  }}
                >
                  <View style={{}}>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 5,
                      backgroundColor: "green",
                      height: 20,
                      borderRadius: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 13, padding: 2 }}>
                      {item.rating}
                      {"  "}
                    </Text>
                    <FontAwesome name="star" size={10} color="white" />
                  </View>
                </View>

                {/*------------------------------- text in card part2 ----------------------------------*/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 20,
                    width: "100%",
                    paddingHorizontal: 10,
                    paddingVertical: 0,
                    borderBottomColor: "darkgery",
                    borderBottomWidth: 0.2,
                    backgroundColor: "white",
                  }}
                >
                  <View>
                    <Text
                      style={{ color: "#000", fontSize: 11, lineHeight: 15 }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 5,
                      paddingVertical: 3,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome
                      name="rupee"
                      size={10}
                      color="#000"
                      style={{ marginLeft: 0, marginTop: 2 }}
                    />
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 11,
                        lineHeight: 15,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
                {/*------------------------------- text in card part3----------------------------------*/}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 30,
                    width: "100%",
                    paddingHorizontal: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "80%",
                    }}
                  >
                    <FontAwesome5 name="leaf" size={18} color="#289672" />
                    <View style={{}}>
                      <Text
                        style={{
                          color: "#a1a1a1",
                          fontSize: 9,
                          maxWidth: 200,
                          marginLeft: 10,
                        }}
                      >
                        Zomato funds environmental projects to offset
                        delivery....
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "20%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://b.zmtcdn.com/data/o2_assets/e50eb01feab6bd50e50430f34b4645ac1613542991.png",
                      }}
                      style={{
                        width: 42,
                        height: 15,
                        borderRadius: 2,
                        marginRight: 0,
                      }}
                    />
                    <FontAwesome5
                      name="cloud-showers-heavy"
                      size={20}
                      color="powderblue"
                      style={{ marginRight: 0, marginLeft: 10 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  surface: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    height: 250,
    marginVertical: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
  },
});
