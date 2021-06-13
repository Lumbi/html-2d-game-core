(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("stage2",
{ "compressionlevel":-1,
"name": "stage2",
"startPoint": {x: 3, y: 16},
 "editorsettings":
    {
     "export":
        {
         "format":"js"
        }
    },
 "height":20,
 "infinite":false,
 "layers":[
        {
         "draworder":"topdown",
         "id":3,
         "name":"back-parallax",
         "objects":[
                {
                 "gid":370,
                 "height":365.746,
                 "id":3,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":731.491,
                 "x":-122.212,
                 "y":365.179
                },
                {
                 "gid":370,
                 "height":365.746,
                 "id":6,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":731.491,
                 "x":745.788766081871,
                 "y":365.338262408157
                },
                {
                 "gid":370,
                 "height":365.746,
                 "id":7,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":731.491,
                 "x":350.575,
                 "y":368.561
                },
                {
                 "gid":370,
                 "height":365.746,
                 "id":8,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":731.491,
                 "x":-60.8494,
                 "y":368.561
                },
                {
                 "gid":370,
                 "height":365.746,
                 "id":29,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":731.491,
                 "x":999.466675738491,
                 "y":365.93491722897
                }],
         "opacity":1,
         "parallaxx":0.98,
         "type":"objectgroup",
         "visible":false,
         "x":0,
         "y":0
        },
        {
         "draworder":"topdown",
         "id":2,
         "name":"front-parallax",
         "objects":[
                {
                 "gid":371,
                 "height":236.079,
                 "id":1,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":472.158,
                 "x":-217.6,
                 "y":221.773
                },
                {
                 "gid":371,
                 "height":236.079,
                 "id":2,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":472.158,
                 "x":254.364,
                 "y":223.153
                },
                {
                 "gid":371,
                 "height":236.079,
                 "id":4,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":472.158,
                 "x":726.551,
                 "y":223.167
                },
                {
                 "gid":371,
                 "height":236.079,
                 "id":5,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":472.158,
                 "x":1198.52,
                 "y":224.547
                }],
         "opacity":0.5,
         "parallaxx":0.8,
         "parallaxy":0.9,
         "type":"objectgroup",
         "visible":false,
         "x":0,
         "y":0
        },
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 304, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 203, 204, 205, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 230, 231, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 229, 230, 231, 232, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 230, 231, 232, 0, 817, 817, 817, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":5,
         "name":"background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":100,
         "x":0,
         "y":0
        },
        {
         "data":[116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 60, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 107, 107, 107, 107, 107, 107, 107, 60, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 107, 107, 107, 107, 107, 107, 107, 60, 116, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 107, 107, 107, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 107, 107, 107, 60, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 107, 107, 107, 107, 107, 108, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 107, 107, 107, 60, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 107, 107, 107, 107, 107, 108, 0, 0, 0, 0, 0, 250, 0, 0, 106, 107, 107, 107, 107, 60, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 116, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 59, 59, 59, 59, 60, 116, 116, 116, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 59, 59, 59, 59, 60, 116, 116, 116, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 0, 252, 0, 106, 59, 59, 59, 59, 60, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 58, 107, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 81, 116, 81, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 116, 58, 107, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 86, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 107, 107, 107, 118, 91, 0, 0, 0, 0, 0, 114, 118, 107, 118, 119, 0, 0, 114, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 80, 58, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 141, 118, 118, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 118, 107, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 107, 107, 107, 107, 107, 107, 107, 107, 107, 107, 116, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 118, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 818, 58, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 118, 118, 118, 118, 118, 118, 118, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 106, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 118, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 56, 0, 0, 0, 106, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 54, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 82, 0, 0, 0, 0, 0, 0, 80, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 818, 110, 55, 55, 55, 55, 55, 55, 112, 110, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 0, 0, 54, 55, 55, 55, 55, 55, 55, 55, 56, 0, 0, 0, 0, 0, 54, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 0, 0, 0, 0, 54, 55, 55, 55, 55, 55, 55, 55, 55, 112, 110, 55, 55, 55, 55, 55, 55, 55, 56, 0, 0, 54, 55, 55, 55, 56, 0, 0, 0, 0, 0, 54, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 116, 116, 116, 116, 116, 81, 116, 116, 116, 81, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 81, 116, 116, 116, 82, 0, 0, 80, 81, 116, 116, 116, 116, 116, 81, 82, 0, 0, 0, 0, 0, 80, 116, 116, 116, 116, 81, 116, 116, 116, 116, 82, 0, 0, 0, 0, 80, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 81, 116, 116, 116, 116, 116, 82, 0, 0, 80, 116, 116, 116, 82, 0, 0, 0, 0, 0, 80, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 81, 116, 116, 116, 116, 116, 81, 82, 0, 0, 80, 81, 116, 81, 116, 116, 116, 116, 82, 0, 0, 0, 0, 0, 80, 116, 116, 81, 116, 116, 116, 116, 81, 116, 82, 0, 0, 0, 0, 80, 116, 81, 116, 81, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 81, 116, 116, 82, 0, 0, 80, 116, 116, 116, 82, 0, 0, 0, 0, 0, 80, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81],
         "height":20,
         "id":1,
         "name":"terrain",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":100,
         "x":0,
         "y":0
        },
        {
         "draworder":"topdown",
         "id":9,
         "name":"enemy",
         "objects":[
                {
                 "gid":807,
                 "height":16,
                 "id":18,
                 "name":"",
                 "rotation":0,
                 "type":"enemy-l-p",
                 "visible":true,
                 "width":16,
                 "x":272,
                 "y":176
                },
                {
                 "gid":1073742639,
                 "height":16,
                 "id":20,
                 "name":"",
                 "rotation":0,
                 "type":"enemy-l",
                 "visible":true,
                 "width":16,
                 "x":512,
                 "y":272
                },
                {
                 "gid":815,
                 "height":16,
                 "id":31,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":800,
                 "y":224
                },
                {
                 "gid":815,
                 "height":16,
                 "id":32,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":912,
                 "y":96
                },
                {
                 "gid":811,
                 "height":16,
                 "id":33,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":704,
                 "y":176
                },
                {
                 "gid":807,
                 "height":16,
                 "id":34,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":736,
                 "y":176
                },
                {
                 "gid":811,
                 "height":16,
                 "id":35,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":352,
                 "y":144
                },
                {
                 "gid":811,
                 "height":16,
                 "id":37,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":528,
                 "y":224
                },
                {
                 "gid":811,
                 "height":16,
                 "id":38,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":656,
                 "y":176
                },
                {
                 "gid":811,
                 "height":16,
                 "id":41,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":704,
                 "y":128
                },
                {
                 "gid":811,
                 "height":16,
                 "id":43,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1072,
                 "y":224
                },
                {
                 "gid":807,
                 "height":16,
                 "id":44,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1152,
                 "y":208
                },
                {
                 "gid":811,
                 "height":16,
                 "id":45,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1216,
                 "y":176
                },
                {
                 "gid":811,
                 "height":16,
                 "id":46,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1312,
                 "y":160
                },
                {
                 "gid":807,
                 "height":16,
                 "id":47,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1424,
                 "y":272
                },
                {
                 "gid":807,
                 "height":16,
                 "id":48,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1296,
                 "y":272
                },
                {
                 "gid":811,
                 "height":16,
                 "id":49,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1200,
                 "y":272
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        },
        {
         "draworder":"topdown",
         "id":10,
         "name":"item",
         "objects":[
                {
                 "gid":393,
                 "height":16,
                 "id":21,
                 "name":"",
                 "rotation":0,
                 "type":"switcher",
                 "visible":true,
                 "width":16,
                 "x":416,
                 "y":112
                },
                {
                 "gid":393,
                 "height":16,
                 "id":22,
                 "name":"",
                 "rotation":0,
                 "type":"switcher",
                 "visible":true,
                 "width":16,
                 "x":544,
                 "y":272
                },
                {
                 "gid":393,
                 "height":16,
                 "id":23,
                 "name":"",
                 "rotation":0,
                 "type":"switcher",
                 "visible":true,
                 "width":16,
                 "x":928,
                 "y":96
                },
                {
                 "gid":393,
                 "height":16,
                 "id":24,
                 "name":"",
                 "rotation":0,
                 "type":"switcher",
                 "visible":true,
                 "width":16,
                 "x":816,
                 "y":224
                },
                {
                 "gid":393,
                 "height":16,
                 "id":39,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":672,
                 "y":144
                },
                {
                 "gid":393,
                 "height":16,
                 "id":42,
                 "name":"",
                 "rotation":0,
                 "type":"switcher",
                 "visible":true,
                 "width":16,
                 "x":544,
                 "y":80
                },
                {
                 "gid":393,
                 "height":16,
                 "id":50,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1008,
                 "y":272
                },
                {
                 "gid":393,
                 "height":16,
                 "id":51,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1168,
                 "y":272
                },
                {
                 "gid":393,
                 "height":16,
                 "id":52,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1136,
                 "y":128
                },
                {
                 "gid":393,
                 "height":16,
                 "id":53,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":1280,
                 "y":224
                },
                {
                 "gid":393,
                 "height":16,
                 "id":54,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":16,
                 "x":608,
                 "y":144
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":12,
 "nextobjectid":56,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.7.0",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"starry-night-tileset.tsx"
        },
        {
         "firstgid":339,
         "source":"starry-night-tileset-full.tsx"
        },
        {
         "firstgid":370,
         "source":"starry-night-backgrounds.tsx"
        },
        {
         "firstgid":372,
         "source":"rpg-icons.tsx"
        },
        {
         "firstgid":805,
         "source":"basic_enemy_tileset.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.6",
 "width":100
});
