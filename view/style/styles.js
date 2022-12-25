('use strict');

var React = require('react-native');

const styles = React.StyleSheet.create({
  container: {
    flex: 1,
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
  },

  textInput: {
    fontSize: 10,
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
});

module.exports = styles;
