define({ "api": [
  {
    "type": "get",
    "url": "/info/",
    "title": "Request Short Description of the API",
    "name": "GetInfo",
    "group": "Info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short",
            "description": "<p>description of api.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/api.routes.js",
    "groupTitle": "Info"
  }
] });
