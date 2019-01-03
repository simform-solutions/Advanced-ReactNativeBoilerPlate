import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors, Metrics, Fonts } from '../../Themes/';

export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: Metrics.section
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  message: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.steel
  },
  icon: {
    color: Colors.steel
  }
});
