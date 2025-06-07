import directiveFocus from './focus'
import directiveFtime from './ftime'
import directiveUnit from './unit'

export default function directive(app) {
  directiveFocus(app)
  directiveFtime(app)
  directiveUnit(app)
}
