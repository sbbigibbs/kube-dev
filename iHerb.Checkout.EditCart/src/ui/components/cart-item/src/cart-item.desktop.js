
      // <View>
      //   <View style={styles.lineItem}>
      //     {errorMsgList.map(error => {
      //       return <ErrorBox isCartError={false} errorMessage={error} />
      //     })} 
      //   </View>
      //   <View style={styles.cartItem}>
      //     <View style={styles.prodInfo}>
      //       <View>
      //         <Image
      //           style={styles.image}
      //           source={{uri: imageSource}} />
      //       </View>
      //       <View style={styles.description}>
      //         <Text style={styles.title}>{title}</Text>
      //         <Text style={styles.productId}>
      //           <Text>ProductId:</Text>
      //           <Text>{productId}</Text>
      //         </Text>
      //         <Text style={styles.weight}>
      //           <Text>Weight:</Text>
      //           <Text>{weight} lbs</Text>
      //         </Text>
      //         {promoElement}
      //       </View>
      //     </View>
      //     <View style={styles.price}>
      //       <Text>{price}</Text>
      //     </View>
      //     <View style={styles.quantityContainer}>
      //       <MuiThemeProvider>
      //       <DropDownMenu style={dropdownStyles.customStyle} labelStyle={dropdownStyles.customLabel} iconStyle={dropdownStyles.customIcon} underlineStyle={dropdownStyles.customUnderline} menuStyle={dropdownStyles.customMenu} menuItemStyle={dropdownStyles.customMenuItem} selectedMenuItemStyle={dropdownStyles.customSelectedItem} autoWidth={false} value={parseInt(quantity)} onChange={handleChange}>
      //         {items}
      //       </DropDownMenu>
      //       </MuiThemeProvider>
      //       <View>
      //         <Text style={styles.removeItem} onPress={onPostToWishlist}>Move to Wish List</Text>
      //       </View>
      //       <View>
      //         <Text style={styles.removeItem} onPress={onDeleteProduct}>Remove</Text>
      //       </View>

      //     </View>
      //     <View style={styles.discount}>
      //       {discountMsgList.map(message => {
      //           return <Text>{message}</Text>
      //       })}
      //       </View>
      //     <View style={styles.total}>
      //       <Text>{total}</Text>
      //     </View>
      //     {/* <View>
      //       <Text>{totalDiscount}</Text>
      //     </View> */}
      //   </View>
      // </View>