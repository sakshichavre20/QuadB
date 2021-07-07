import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import RestaurantList from "./RestaurantList";

export default function HeaderList(props) {
  const [data, setData] = useState([
    {
      name: "Healthy",
      id: "1",
      img: {
        uri: "https://images.everydayhealth.com/images/top-health-food-trends-to-expect-2021-01-thats-it-probiotics-00-1440x810.jpg?w=720",
      },
    },
    {
      name: "Pizza",
      id: "2",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShP2mEuXq2kI0HjpG_MeeJArWJ6tMoEnetnA&usqp=CAU",
      },
    },
    {
      name: "Chaat",
      id: "3",
      img: {
        uri: "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",
      },
    },
    {
      name: "Momos",
      id: "4",
      img: {
        uri: "https://static.toiimg.com/photo/60275824.cms",
      },
    },
    {
      name: "Burger",
      id: "5",
      img: {
        uri: "https://st2.depositphotos.com/1020618/8867/i/600/depositphotos_88670080-stock-photo-close-up-of-home-made.jpg",
      },
    },
    {
      name: "Pasta",
      id: "6",
      img: {
        uri: "https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg",
      },
    },
    {
      name: "Cake",
      id: "7",
      img: {
        uri: "https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg",
      },
    },
    {
      name: "Noodels",
      id: "8",
      img: {
        uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ijxbzrbtzuoyqlus2c0f",
      },
    },
  ]);

  return (
    <View style={styles.container}>
      {/*------------------------------------------Header Section--------------------------------------- */}
      <View style={styles.header}>
        <View style={{ width: "10%" }}>
          <Entypo name="location" size={22} color="black" />
        </View>
        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold" }}>
            SomnathNagar ,Vadgoansheri
          </Text>
        </View>
        <View style={{ width: "10%", alignItems: "flex-end" }}>
          <ImageBackground
            source={{
              uri: "https://static.wikia.nocookie.net/vampirediaries/images/1/16/Damon-S8.jpg/revision/latest?cb=20170225081735",
            }}
            style={{ height: 25, width: 25 }}
            imageStyle={{ borderRadius: 50 }}
          >
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: "red",
                borderRadius: 15,
                borderWidth: 2,
                borderColor: "white",
                position: "relative",
                left: 20,
              }}
            ></View>
          </ImageBackground>
        </View>
      </View>
      {/*----------------------------------------------------SearchBar Section----------------------------------------------------------------- */}
      <View style={{ width: "100%", height: 60, paddingHorizontal: 10 }}>
        <View style={styles.search}>
          <AntDesign name="search1" size={20} color="#bf1363" />
          <TextInput
            placeholderTextColor="grey"
            placeholder="Restaurant name, cuisine, or a dish..."
            style={{ paddingLeft: 10, width: "88%", fontSize: 14 }}
          />
          <FontAwesome name="sliders" size={24} color="grey" />
        </View>
      </View>
      {/*-----------------------------------------------ScrollView----------------------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 40,
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{ width: "80%", height: 40 }}
          horizontal={true}
          contentContainerStyle={{ alignItems: "center", paddingLeft: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {/*----------------------------------------------------Max Safety------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                MAX Safety
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <MaterialCommunityIcons
                name="shield-star-outline"
                size={15}
                color="#000"
                style={{ marginRight: 3 }}
              />
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                PRO
              </Text>
            </View>
          </TouchableOpacity>
          {/*----------------------------------------------------Cuisines------------------------------------------------------------------------------------ */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                Cuisines
              </Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={15}
                color="#000"
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableOpacity>
          {/*----------------------------------------------------Rating----------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                Rating 4.0
              </Text>
              <Fontisto
                name="plus-a"
                size={11}
                color="#000"
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableOpacity>
          {/*---------------------------------------------------Fast Delivery---------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                Fastest Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*----------------------------------------------------Offers------------------------------------------------------------------------------------ */}
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                Offers
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            {/*---------------------------------------------------Takeaway-------------------------------------------------------------------------------- */}
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                Takeaway
              </Text>
            </View>
          </TouchableOpacity>
          {/*---------------------------------------------------More----------------------------------------------------------------------------------- */}
          <TouchableOpacity>
            <View style={styles.scrollcomp}>
              <Text style={{ color: "#000", fontWeight: "500", fontSize: 12 }}>
                More
              </Text>
              <MaterialIcons
                name="arrow-drop-down"
                size={15}
                color="#000"
                style={{ marginLeft: 3 }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
        {/*----------------------------------------------------ScrollView Ends----------------------------------------------------------------------------------- */}

        {/*--------------------------------------------------------Popular----------------------------------------------------------------------------------- */}
        <TouchableOpacity>
          <View
            style={{
              borderWidth: 1,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              paddingHorizontal: 5,
              height: 25,
              borderColor: "darkgrey",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
              left: 0,
            }}
          >
            <Ionicons name="ios-swap-vertical-sharp" size={15} color="#000" />
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 12 }}>
              Popular
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/*----------------------------------------------------Flat List------------------------------------------------------------------------------------ */}

      {/*---------------------------------------------------Eat Section------------------------------------------------------------------------------------ */}
      <FlatList
        numColumns={4}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Image source={item.img} style={styles.image} />
              <Text style={{ fontWeight: "bold", fontSize: 13, color: "#000" }}>
                {item.name}
              </Text>
            </View>
          );
        }}
        ListHeaderComponent={({ item }) => {
          return (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#000",
                marginBottom: 10,
                marginLeft: 15,
              }}
            >
              Eat what makes you happy
            </Text>
          );
        }}
        ListFooterComponent={({ item }) => {
          return (
            <View>
              <RestaurantList />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  item: {
    height: 100,
    width: "25%",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    height: 45,
    borderRadius: 10,
    margin: 6,
    borderWidth: 1,
    borderColor: "#A1A1A1",
    paddingHorizontal: 10,
  },
  scrollcomp: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 25,
    marginRight: 8,
    borderColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
