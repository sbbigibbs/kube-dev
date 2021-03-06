import * as React from "react"
import { View, Text, Image } from 'react-primitives';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ErrorBox from "../../../error-box/src/index"
import { dropdownStyles, styles } from "../styles/cart-item"

export default class CartItem extends React.Component {
  state: any
  props: any
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
          {discountMsgList.map((promo, index) => {
            return <Text key={index} style={styles.promo}>{promo}</Text>
          })}
          {discountsAppliedList.map((discount, index) => {
            return <Text key={index} style={styles.promo}>{discount}</Text>
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
      <Text style={styles.each}>{labels.each} {price})</Text>
    </View>

    const handleChange = (event, index, value) => {
      onCreateChangeProductQuantity(value)
    }

    const items = [];
    for (let i = 0; i < 144; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }

    return (
      <View style={styles.root}>
        <View style={styles.lineItemError}>
          {errorMsgList.map((error, i) => {
            return <ErrorBox key={i} isCartError={false} errorMessage={error} />
          })} 
        </View>
        <View style={styles.title}>
          <ProductTitle />
        </View>
        <View style={styles.lineItem}>
          <View style={styles.image}>
            <ProductImage />
            <Weight />
          </View>
          <View style={styles.details}>
            <View style={styles.pricing}>
              <View style={styles.quantityContainer}>
                <MuiThemeProvider>
                <DropDownMenu autoWidth={false} 
                              value={parseInt(quantity)} 
                              onChange={handleChange} 
                              underlineStyle={{display: 'none'}}
                              maxHeight={200}
                              labelStyle={dropdownStyles.customLabel}
                              iconStyle={dropdownStyles.customIconStyle}
                              menuStyle={dropdownStyles.dropdownDisplay}
                              selectedMenuItemStyle={dropdownStyles.customSelectedMenuItemStyle}>
                  {items}
                </DropDownMenu>
                </MuiThemeProvider>
              </View>
              <ProductPrice />
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
