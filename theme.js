import { yellow as theme } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/solarizedlight'

export default {
  ...theme,
  prism: {
    style
  },
  // css: {
  //   ...theme.css,
  //   textAlign: 'left',
  //   blockquote: {
  //     paddingLeft: '1em',
  //     paddingRight: '1em',
  //   },
  //   'blockquote > p': {
  //     lineHeight: '1.2',
  //     fontSize: '1.2em',
  //     paddingLeft: '2em',
  //     paddingRight: '2em',
  //   },
  //   'blockquote + p': {
  //     paddingRight: '2em',
  //     textAlign: 'right',
  //   },
  //   li: {
  //     fontSize: '1.4em',
  //     paddingBottom: '1.2em',
  //   },
  // },
  // heading: {
  //   textTransform: 'inherit',
  // },
  // colors: {
  //   text: '#333',
  //   background: '#fafafa',
  //   link: '#1c7cc2',
  // },
  // p: {
  //   fontSize: '1.5em',
  //   lineHeight: '1.4',
  // },
  link: {
    color: '#1c7cc2'
  },
  transitionDuration: 0, // disable transitions
}
