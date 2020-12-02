import * as $ from 'jquery'
import Post from './models/Post'
import WebpackLogo from '@/assets/webpack-logo.png'

import './styles/styles.css'


const post = new Post('Webpack Post Title', WebpackLogo)
$('pre').addClass('code').html(post.toString())


const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
)

render(<App/>, document.getElementById('app'))


// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)
