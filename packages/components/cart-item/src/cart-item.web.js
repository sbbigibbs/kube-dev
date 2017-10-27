import React from "react"
import { View, Text, Image } from 'react-primitives';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ErrorBox from "@iherb/ui-component-error-box"
import { dropdownStyles, styles } from "./styles/web"

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.quantity};
    this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.props.onRequestProductQuantityChange(value)
    this.setState({value});
  }

  render() {
    const {
      imageSource,
      title,
      productId,
      weight,
      discountMsgList,
      price,
      quantity,
      discountsAppliedList,
      total,
      totalDiscount,
      onIncrement,
      onDecrement,
      onRequestProductQuantityChange,
      onCreateChangeProductQuantity,
      onDeleteProduct,
      onPostToWishlist,
      errorMsgList,
      labels,
      weightKg,
      isDiscontinued
    } = this.props

    const weightLbs = labels.weightLbs.slice(3, labels.weightLbs.length)
    const kgWeight = labels.weightKg.slice(3, labels.weightKg.length)

    let promoElement = 
        <View>
          {discountMsgList.map(promo => {
            return <Text style={styles.promo}>{promo}</Text>
          })}
          {discountsAppliedList.map(discount => {
            return <Text style={styles.promo}>{discount}</Text>
          })}
        </View>
    
    let discontinuedElement = isDiscontinued ? 
      <Text style={styles.discontinued}>Discontinued</Text>
      : <Text></Text>

    const ProductImage = () => <Image 
      style={styles.productImage}
      source={{uri: imageSource}} />

    const Weight = () => <View style={styles.weight}>
      <Text>{labels.weight}</Text>
      <Text>{weight}{weightLbs} ({weightKg}{kgWeight})</Text>
    </View>

    const ProductTitle = () => <Text style={styles.productTitle}> {title} </Text>
      
    const ProductPrice = () => <View style={styles.productPrice}>
      <Text style={styles.total}>{total}</Text>
      <Text>{labels.each} {price})</Text>
    </View>

    const handleChange = (event, index, value) => {
      onCreateChangeProductQuantity(value)
    }

    const items = [];
    for (let i = 0; i < 144; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }

    return (
      <View>
        <View style={styles.lineItem}>
          {errorMsgList.map(error => {
            return <ErrorBox isCartError={false} errorMessage={error} />
          })} 
        </View>
        <View style={styles.root}>
          <View style={styles.image}>
            <ProductImage />
            <Weight />
          </View>
          <View style={styles.details}>
            <View style={styles.title}>
              <ProductTitle />
            </View>
            <View style={styles.pricing}>
              <View style={styles.price}><ProductPrice /></View>
              <View style={styles.quantityContainer}>
                <MuiThemeProvider>
                <DropDownMenu style={dropdownStyles.customStyle} labelStyle={dropdownStyles.customLabel} iconStyle={dropdownStyles.customIcon} underlineStyle={dropdownStyles.customUnderline} menuStyle={dropdownStyles.customMenu} menuItemStyle={dropdownStyles.customMenuItem} selectedMenuItemStyle={dropdownStyles.customSelectedItem} autoWidth={false} value={parseInt(quantity)} onChange={handleChange}>
                  {items}
                </DropDownMenu>
                </MuiThemeProvider>
              </View>
            </View>
            {discontinuedElement}
            {promoElement}
            <View style={styles.actions}>
              <Text
                onPress={onPostToWishlist}
                style={styles.addToList}>{labels.addToList}</Text>
              <Text onPress={onDeleteProduct} style={styles.deleteProduct}>{labels.removeButton}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
