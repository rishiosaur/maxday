import React from 'react'
import { Box } from '@hackclub/design-system'

const Body = Box.withComponent('main').extend`
  font-size: 18px;
  ul, ol {
    padding-left: 0;
  }
`

export default Body
