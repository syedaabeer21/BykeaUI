// import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
// import React from 'react'
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// const Index = () => {
//   return (
//     <SafeAreaView>
//       {/* header */}
//       <View style={styles.header}>
//       <MaterialIcons style={styles.menuIcon} name="menu" size={34} color="black" />
//       <Text style={styles.logo}>BYKEA</Text>
//       <MaterialIcons style={styles.menuIcon} name="add-call" size={34} color="black" />
//       </View>

//       {/* Banner */}
//       <View style={styles.banner}>
//       <Image 
//         source={require('../assets/images/banner.png')}
//         style={styles.image}
        
//       />
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Index


// const styles = StyleSheet.create({
//   header:{
//     backgroundColor: 'white',
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   logo: {
//     color: '#1a994e',
//     fontSize: 30,
//     letterSpacing: 2,
//     fontWeight: 700
//   },
//   menuIcon:{
//     marginHorizontal: 10,
//     color: '#1a994e'
//   },
//   banner:{
//     backgroundColor:'red',
//     width:'100%',
//     height: 200,
//     borderBottomLeftRadius:15,
//     borderBottomRightRadius:15,
    
//   },
//   image:{
    
//   }
// })
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      {/* header */}
      <View style={styles.header}>
    <MaterialIcons style={styles.menuIcon} name="menu" size={34} color="black" />
    <Text style={styles.logo}>BYKEA</Text>
  <MaterialIcons style={styles.menuIcon} name="add-call" size={34} color="black" />
    </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/images/banner.png')} style={styles.bannerImage} />
      </View>

      {/* Wallet Section */}
      <View style={styles.walletSection}>
        
        <MaterialIcons  name="forum" size={34} color="gray" /> |
        <Text style={{color:'gray'}}>Rs. 0</Text>
      </View>

      {/* Service Cards Section */}
      <View style={styles.gridContainer}>
        {[
          { title: 'Carpool', image: require('../assets/images/react-logo.png'), color: '#AEE2FF' },
          { title: 'Ride', image: require('../assets/images/react-logo.png'), color: '#B4F1B4' },
          { title: 'Delivery', image: require('../assets/images/react-logo.png'), color: '#FFE4B5' },
          { title: 'Mobiles', image: require('../assets/images/react-logo.png'), color: '#D8BFD8' },
          { title: 'Shops', image: require('../assets/images/react-logo.png'), color: '#B0E0E6' },
          { title: 'Rentals', image: require('../assets/images/react-logo.png'), color: '#FFFACD' }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={[styles.card, { backgroundColor: item.color }]}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00A651',
  },
  icon: {
    width: 30,
    height: 30,
  },
  bannerContainer: {
    padding: 10,
    backgroundColor: '#ededed',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    height:200
  },

  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  walletSection: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:10,
    marginLeft:20,
    marginRight:20,
    marginTop:-25,
    flexDirection:'row',
    justifyContent:'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  card: {
    width: '45%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuIcon:{
        marginHorizontal: 10,
       color: '#1a994e'
      }
});

export default Index;
