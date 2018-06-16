import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const HelloApp = () => (
    <Router>
        <div style={{margin: 20}}>
          <HelloHeader />
          <div>
              <Route exact path='/' component={HelloJapanese} />
              <Route path='/ja' component={HelloJapanese} />
              <Route path='/en' component={HelloEnglish} />
              <Route path='/cn' component={HelloChinese} />
          </div>
          <HelloFooter />
        </div>
    </Router>
)

const HelloHeader = () => (
    <div>
        <h3 style={styleHeader}>HelloApp</h3>
        <p>
            [<a href='/ja'>日本語</a>]
            [<a href='/en'>英語</a>]
            [<a href='/cn'>中国語</a>]
        </p>
    </div>
)

const HelloFooter = () => (
    <div style={styleHeader}>
    挨拶をいろいろな言語で表示するアプリです。
    </div>
)

const HelloJapanese = () => (
    <div>
        <h1>こんにちは</h1>
        <p><a href='/'>戻る</a></p>
    </div>
);

const HelloEnglish = () => (
    <div>
        <h1>Hello</h1>
        <p><a href='/'>Back</a></p>
    </div>
);

const HelloChinese = () => (
    <div>
        <h1>こんにちは(中国語)</h1>
        <p><a href='/'>戻る</a></p>
    </div>
);

const styleHeader = {
    backgroundColor: 'orange',
    color: 'white',
    padding: 8
}

export default HelloApp