import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>Welcome to the Components Library</h1>
        <p>ya-design</p>
        <h3>Install</h3>
        <code>
          npm install ****** --save
        </code>
      </>
    )
  }, { info : { disable: true }})