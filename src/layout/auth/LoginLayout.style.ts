import StyleProperty from '@util/StyleProperty';

const styles = StyleProperty.create({
  row: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightsalmon',
  },
  titleLayout: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    margin: 0,
    textAlign: 'center',
  },
  formItem: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    height: 40,
  },
  button: {
    width: '100%',
    height: 48,
  },
});

export default styles;
