import React from 'react'
import ReactDom from 'react-dom'
import MyApp from './components/MyApp'
import TestApp from './components/TestApp'
import MemeGen from './components/MemeGen'

ReactDom.render(
    <MemeGen />, document.getElementById('root')
)