('use strict');

var React = require('react-native');

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    // fontWeight: 'bold',
  },

  containerCategory: {
    backgroundColor: 'white',
    // padding: -10,
    paddingTop: 10,
    padding: 20,
    marginBottom: 10,
  },
  containerPromo: {
    backgroundColor: 'white',
    // padding: -10,
    padding: 20,
    marginBottom: 10,
  },

  brownText: {
    color: '#AC8B75',
  },
  loginScreenButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  signText: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  loginText1: {
    color: '#525252',
    textAlign: 'center',
    paddingLeft: 10,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  checkbox: {
    alignSelf: 'center',
  },
  label: {
    fontSize: 10,
    marginLeft: -10,
  },
  labelForgot: {
    fontSize: 10,
    color: '#AC8B75',
  },
  inputMain: {
    marginTop: 10,
  },
  inputContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#525252',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    fontSize: 10,
    paddingLeft: 10,
    width: '90%',
  },

  textInputCreateProduct: {
    fontSize: 10,
    paddingLeft: 10,
    width: '90%',
  },

  signLogo: {
    width: 20,
    height: 20,
    marginRight: 20,
  },

  loginText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },

  nunitoSans: {
    fontFamily: 'NunitoSans-Regular',
  },

  checkInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  labelInput: {
    fontSize: 10,
    color: '#525252',
    paddingTop: 10,
    marginBottom: 3,
  },

  buttonLogin: {
    backgroundColor: '#E0E0E0',
  },

  input: {
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
  },

  registerText: {
    marginTop: -10,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  containerRegisterAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  register: {
    color: '#AD8B73',
  },

  sign: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#525252',
  },

  or: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  signContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 30,
  },
  signContainer1: {
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
  },

  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#525252',
  },

  pemisah: {
    width: 20,
    textAlign: 'center',
  },

  orText: {
    width: 50,
    fontSize: 10,
    textAlign: 'center',
  },

  sand: {
    width: '100%',
    flex: 1,
    zIndex: -1,
  },

  background: {
    width: '100%',
    height: '20%',
    flex: 1,
  },
  logo: {
    width: '50%',
    height: 63,
    alignSelf: 'center',
  },
  view1: {
    flex: 5,
    padding: 20,
  },
  loginTextInput: {
    marginTop: 20,
  },
  loginPage: {
    width: '100%',
    marginTop: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    padding: 20,
  },

  containerSign: {
    width: '100%',

    marginTop: 20,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  denganMe: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
  },

  denganMe1: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },

  denganMeb: {
    color: '#AD8B73',
  },

  signIn: {
    backgroundColor: 'blue',
    fontSize: 20,
    width: '40%',
    alignSelf: 'center',
  },

  textCategories: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },

  tabs: {
    flex: 1,
    height: 750,
    backgroundColor: 'white',
  },

  containerPP: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  empatPuluh: {
    backgroundColor: '#FF0000',
    opacity: 0.2,
    fontSize: 9,
    paddingLeft: 3,
    paddingRight: 3,
    marginLeft: 5,
    alignSelf: 'flex-start',
    borderRadius: 2,
  },

  albaiCardTitle: {
    fontWeight: 'SemiBold',
    fontSize: 13,
  },

  logoAlbaiPromo: {
    width: 14,
    height: 14,
  },

  containerP: {
    padding: 10,
  },

  textSampingLogoAlbai: {
    fontSize: 10,
    marginLeft: 5,
  },

  albaiCardHarga: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  albaiPromoContent: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  albaiPromoMerahContainer: {
    flexDirection: 'row',
  },

  albaiLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoriesTitle: {
    textAlign: 'center',
    paddingTop: 10,
  },

  albaiCardHargaPromo: {
    textDecorationLine: 'line-through',
    fontSize: 11,
  },

  cardCategoriesImage: {
    height: 80,
  },

  cpluss: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardCategoriesContainer: {
    flexDirection: 'row',
    paddingBottom: 5,
  },

  cardAlbaiContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    paddingBottom: 5,
  },

  cardCategoriesContainer1: {
    flexDirection: 'row',
    paddingBottom: 5,
  },

  cardAlbai: {
    marginRight: 20,
    width: 130,
    height: 300,
  },

  cardAlbaiTab: {
    width: 165,
    height: 330,
  },

  cardAlbaiTabButton: {
    width: 165,
    height: 350,
  },

  cardAlbaiImage: {
    height: 110,
  },

  cardAlbaiImageTab: {
    height: 150,
  },

  cardCategories: {
    width: 130,
    height: 130,
    marginRight: 20,
  },

  imagePromoBanner: {
    width: '100%',
    height: 170,
  },

  containerP2: {
    padding: 10,
  },

  filterContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },

  filterTextButtonHightLight: {
    fontSize: 10,
    color: 'black',
  },

  filterTextButton: {
    fontSize: 10,
    color: 'black',
  },

  filterButtonHightLight: {
    backgroundColor: '#E3CAA5',
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 7,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputContainerHeader: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#525252',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginLeft: 10,
  },
  textInputHeader: {
    fontSize: 10,
    paddingLeft: 10,
    width: '90%',
  },

  headerMain: {
    padding: 20,
    backgroundColor: '#E3CAA5',
  },

  iconHeader: {
    marginLeft: 5,
  },

  filterButton: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 7,
    marginLeft: 10,
  },

  filterTitle: {
    backgroundColor: '#AC8B75',
    alignSelf: 'center',
    marginRight: 10,
    padding: 10,
  },

  filterText: {
    fontSize: 16,
    color: 'white',
  },

  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: 250,
    width: '100%',
  },

  bintangItemDetail: {
    alignSelf: 'center',
    width: 15,
    height: 15,
  },

  filterButtonHightLightItemDetail: {
    backgroundColor: 'rgba(227, 202, 165, 0.5)',
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#E3CAA5',
  },

  komenUser: {
    fontSize: 13,
    marginBottom: 3,
    color: '#282828',
  },

  tanggalReview: {
    marginBottom: 10,
    fontSize: 12,
  },

  cartContainer: {
    padding: 10,
  },

  chatNowText: {
    marginLeft: 5,
    color: '#AC8B75',
  },
  addToCartText: {
    marginLeft: 5,
    color: 'white',
  },

  chatNowButton: {
    borderColor: '#AC8B75',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },

  seeAllReview: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 15,
  },

  addToCart: {
    backgroundColor: '#AC8B75',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },

  containerHighReview: {
    marginTop: 10,
    padding: 10,
    borderColor: '#D7D7D7',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
  },

  profileTokoText: {
    marginLeft: 10,
  },

  rowJauh: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tanggalUserKome: {
    fontSize: 9,
  },

  reviewText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },

  profileUser: {
    marginTop: 15,
    width: 55,
    height: 55,
    borderRadius: 5,
    marginBottom: 5,
  },

  textAlignCenter: {
    textAlign: 'center',
  },

  profileTokoReview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  profileToko: {
    width: 43,
    height: 43,
  },

  row: {
    flexDirection: 'row',
  },

  lokasiLogo: {
    width: 7.5,
    alignSelf: 'center',
    height: 11,
  },

  productDescDesc: {
    marginBottom: 5,
  },

  titleProductSatu: {
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    padding: 15,
  },

  titleProduct: {
    fontWeight: 'bold',
    color: 'black',
  },

  harga: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  pertama: {
    alignItems: 'center',
  },

  freeShipping: {
    width: 60,
    height: 20,
  },

  checkBrown: {
    width: 13,
    height: 16,
  },
});

module.exports = styles;
