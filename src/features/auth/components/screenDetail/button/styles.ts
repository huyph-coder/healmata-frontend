import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  button: {
    width: 342,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#83C082',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
  },
  pressed: {
    backgroundColor: '#72aa71',
  }
})

export default styles;