import color from '@constant/Color';

import StyleProperty from '@util/StyleProperty';

const styles = StyleProperty.create({
  headerHeight: {
    height: 80,
  },
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    lineHeight: 0,
    padding: 0,
    backgroundColor: color.headerBackground,
  },
  headerInLayout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'transparent',
  },
  title: {
    flex: 1,
    margin: 0,
    paddingLeft: 16,
    paddingRight: 16,
    color: 'white',
  },
  buttonUserInfo: {
    marginLeft: 8,
    backgroundColor: 'lightgray',
  },
});

export default styles;
