import React from 'react';
import {render, Artboard} from 'react-sketchapp';
import { Image, View, Text, StyleSheet } from 'react-primitives';
import {action as loadCartAction, Frame as LoadCartFrame} from "@iherb/load-cart-base";
import {action as action, Frame as Frame} from "@iherb/promo-codes-invalid-promo";
import {action as promoNewCustomerAction, Frame as PromoNewCustomerFrame} from "@iherb/load-cart-base";
import {action as volumeDiscountMessageAction, Frame as VolumeDiscountMessageFrame} from "./user-stories/1-Item-volume-discount-message";
import {action as volumeDiscountMessageMetAction, Frame as VolumeDiscountMessageMetFrame} from "./user-stories/1-Item-volume-discount-message-met";
import {action as addingPromoAction, Frame as AddingPromoFrame} from "./user-stories/adding-promo";
import DeviceContainer from './device';


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
    },
    userStoryContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#000000',
      padding: 10
    },
    userStory: {
      color: '#50921c',
      fontSize: 16,
      fontWeight: 'bold'
    },
    userRow: {
      flexDirection: 'row'
    },
    userTitle: {
      fontWeight: 'bold'
    }
  }

  

const deviceRowStyle = {
  flexDirection: 'row',
  marginBottom: 200
}

const DeviceDimensions = {
  Phone: [
    { name: "iPhone SE", width: 320},
    { name: "iPhone 6/6S/7", width: 375},
    { name: "iPhone 6+/6S+/7+", width: 414},
    { name: "iphone SE Landscape", width: 568},
    { name: "iPhonr 6/6S/7 Landscape", width: 667},
    { name: "iPhone 6+/6S+/7+ Landscape", width: 736}

  ],
  Tablet: [
    { name: "iPad", width: 750, height: 920}
  ],
  Desktop: [
    {name: "Desktop (1024)", width: 1024},
    {name: "Desktop (1405)", width: 1406}
  ]

}
const Orientation = {
  Portrait: "portrait",
  Landscape: "landscape"
}

const Frames = {
  LoadCartFrame: {action: loadCartAction, frame: <LoadCartFrame/>}
  // VolumeDiscountMessageFrame: {action: action, frame: <Frame/>},
  // VolumeDiscountMessageMetFrame: {action: volumeDiscountMessageMetAction, frame: <VolumeDiscountMessageMetFrame/>},
  // AddingPromoFrame: {action: addingPromoAction, frame: <AddingPromoFrame/>}
}

const deviceCategories = [
  {devices: DeviceDimensions.Phone, frame: Frames.LoadCartFrame},
  // {devices: DeviceDimensions.Phone, frame: Frames.VolumeDiscountMessageMetFrame},
  // {devices: DeviceDimensions.Phone, frame: Frames.AddingPromoFrame},
  // {devices: DeviceDimensions.Tablet, frame: Frames.VolumeDiscountMessageFrame}
  // {devices: DeviceDimensions.Tablet},
  // {devices: DeviceDimensions.Desktop}
  
]


 

const CartAllSizes = ({colors}) => (
  <View name="Devices" style={{flexDirection: 'column', flexWrap: 'wrap'}}>
    
    {deviceCategories.map(({devices,frame}) => (
      <View>
        <View style={styles.userStoryContainer}>
          <Text style={styles.userStory}>User Story</Text>
          <Text style={styles.userRow}><Text style={styles.userTitle}>Title - </Text><Text>{frame.action.title}</Text></Text>
          <Text style={styles.userRow}><Text style={styles.userTitle}>Description -</Text> <Text>{frame.action.description}</Text></Text>
        </View>
        <View name="Devices" style={deviceRowStyle}>
        
          
            {devices.map(device => (
                <DeviceContainer device={device} frame={frame}/>
                
              ))}
        
        </View>
      </View>
      
    ))}
  </View>
);



export default (context) => {
  render(<CartAllSizes/>, context.document.currentPage());
    
}