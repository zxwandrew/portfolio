import React from 'react';


export default class Layout extends React.Component {

  render () {
    let contentHtml = this.props.data;
    let clientsource = this.props.client;
    return (
      <html>
        <head>
          <title>Andrew Wang - Full Stack Web Developer</title>
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: contentHtml}}/>
          <script src={clientsource}/>
        </body>
      </html>
    );
  }
};
