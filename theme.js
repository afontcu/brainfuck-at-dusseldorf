import { yellow as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/solarizedlight'

export default {
  ...theme,
  prism: { style },
  link: {
    color: '#1c7cc2'
  },
  transitionDuration: 0, // disable transitions
}
