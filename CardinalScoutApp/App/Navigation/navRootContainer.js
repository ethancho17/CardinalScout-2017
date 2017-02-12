import { connect } from 'react-redux'
import NavRoot from './NavRoot'
import { push, pop } from '../Actions/navActions'
function mapStateToProps (state) {
  return {
    navState: state.navState,
  }
}

export default connect(
  mapStateToProps,
  {
    pushRoute: (route) => push(route),
    popRoute: () => pop()
  }
)(NavRoot)