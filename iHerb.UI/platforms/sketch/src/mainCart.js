import React from 'react';
import {render, Artboard} from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import {action, Frame} from "./user-stories/cart-quantity-discount-item-quantity1"



const styles = {
    row: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    desktopRow: {
      width: 1400
    },
    tabletRow: {
      width: 768
    },
    MobileRow: {
      width: 320
    },
    action: {
      width: 300,
      padding: 30
    },
    actionTitle: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 16
    },
    frame: {},
    title: {
      fontSize: 32,
      marginBottom: 16
    },
    rowMobile: {
        width: 320,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap"
    },
    mobile: {
        width: 320,
        padding: 15
    }
  }

  const CartMobile = props =>
  
      <Artboard name= 'responsive-web-mobile' style={styles.mobile}>
          <Frame/>
       </Artboard>;

const CartTablet = props =>

    <Artboard name= 'responsive-web-tablet' style={{width: 768, borderStyle: "solid", borderWidth: 1, borderColor: "#ededed"}}>
        <Frame/>
     </Artboard>;
    
// const screenSizes = [
//     {name: 'mobile', width: 320, height: 568},
//     {name: 'tablet', width: 768, height: 920},
//     {name: 'desktop', width: 1400}

// ];

// const CartAllSizes = ({children,sizes}) =>

//     <View style={{flexDirection: 'row'}}>
//         {sizes.map(({name,width,height}) => 
//         <Screen key={name} name={name} widht={width}>
//             test
//         </Screen>
//         )}
//     </View>;


export default (context) => {
    render(<CartMobile/>, context.document.currentPage());
    
}