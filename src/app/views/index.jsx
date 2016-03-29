import React from 'react';


export default class Layout extends React.Component {

  render () {
    let contentHtml = this.props.data;
    let clientSource = this.props.client;
    let stylesSource = this.props.styles;
    return (
      <html>
        <head>
          <title>Andrew Wang - Full Stack Web Developer</title>
          <link rel="stylesheet" href="/styles.css"/>
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: contentHtml}}/>
          <script src={clientSource}/>
        </body>
      </html>
    );
  }
};
