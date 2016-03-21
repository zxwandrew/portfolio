export function getProjects() {
  return [
    {
    	link : 'https://pure-dawn-16123.herokuapp.com/',
      git: 'https://github.com/zxwandrew/ArcGISFly',
      detailurl: '/project/arcgisfly',
    	title : 'ArcGIS Fly',
    	classname : 'arcgisfly',
    	technology : ['WebSockets', 'Node', 'Esri JS API', 'Gulp'],
      image: '../assets/arcgisfly.png',
      details: "An application that allows users to control a map remotely through the movements of their mobile device. It establishes a websocket connection between the user's mobile device and computer. The mobile client of the application obtains the mobile device's orientation and then sends it to the desktop client to be interpreted. The desktop uses the information to calculate what extent to render on the map."
    },
    {
      link : 'http://arcdraw.meteor.com/',
      git: 'https://github.com/zxwandrew/ArcDraw',
      detailurl: '/project/arcdraw',
      title : 'ArcDraw',
      classname : 'arcdraw',
      technology : ['Meteor', 'Esri JS API', 'Node'],
      image: '../assets/arcdraw.png',
      details: "An application that allows users from remote locations to draw on a map in a real-time collaborative drawing session. This application utilizes Meteor's DDP connection to keep the drawing updated for all users."
    }
  ]
}
