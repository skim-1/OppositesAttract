import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Header: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 25,
    color: 'white'
  },
  body: {
    backgroundColor: "#353839"
  },
  BodyContainer: {
    height: '90%',
    paddingHorizontal: 20
  },
  Footer: {
    backgroundColor: 'black',
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10
  },
  boxes: {
    width: '100%',
    height: 69,
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Lname: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 120
  },
  profpic: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  ansbutton: {
    width: 81,
    height: 32,
    backgroundColor: '#1EA7D2',
    marginLeft: 10,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  decbutton: {
    width: 81,
    height: 32,
    backgroundColor: '#D21E1E',
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  atext: {
    fontSize: 18,
    color: "white",

  }
});
