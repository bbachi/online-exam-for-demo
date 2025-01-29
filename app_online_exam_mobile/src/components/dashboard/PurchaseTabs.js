import { React } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function PurchaseTabs({selectedTab, onChangeTab}) {

  console.log("selectedTab ", selectedTab)
  
  return (
    <View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <TouchableOpacity style={selectedTab === 'PURCHASED' ? styles.headerBtn : [styles.headerBtn, styles.headerInactiveBtn]} onPress={(e) => onChangeTab('PURCHASED')}>
            <Text style={styles.purchaseButtonText}>Purchased</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectedTab === 'PURCHASED' ? styles.headerBtn : [styles.headerBtn, styles.headerInactiveBtn]} onPress={(e) => onChangeTab('NON-PURCHASED')}>
            <Text style={styles.purchaseButtonText}>Non-Purchased</Text>
        </TouchableOpacity>
      </View>
    </View>
  
  );

}

export default PurchaseTabs;

const styles = StyleSheet.create({
  headerBtn: {
      alignItems: 'center',
      alignContent: 'space-between',
      padding: 10,
      backgroundColor: '#ffffff',
      borderWidth: 0,
      borderRadius: 10,
      borderColor: '#ffffff',
      borderBottomWidth: 0,
      color: '#ffffff',
      height: 48,
      marginTop: 22,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.9,
      shadowRadius: 1,
      elevation: 3,
      textTransform: 'uppercase',
      flexBasis: '45%',
  },
  headerInactiveBtn: {
      backgroundColor: '#A5A5A5',
  },
  alternativeLayoutButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: 10,
  },
  alternativeLayoutInactiveButtonContainer: {
      backgroundColor: '#D6D5D5',
      padding: 10,
  },
  purchaseButtonText: {
      textTransform: 'uppercase',
      fontSize: 14,
  }
});