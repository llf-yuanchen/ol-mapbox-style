const path = require('path');

module.exports = {
  entry: './olms.js',
  devtool: 'source-map',
  node: {fs: 'empty'},
  mode: 'production',
  output: {
    path: path.resolve('./dist'), // Path of output file
    filename: 'olms.js',
    library: 'olms',
    libraryTarget: 'assign',
    libraryExport: 'default'
  },
  externals: {
    'ol/style/Style': 'ol.style.Style',
    'ol/style/Circle': 'ol.style.Circle',
    'ol/style/Text': 'ol.style.Text',
    'ol/style/Icon': 'ol.style.Icon',
    'ol/style/Stroke': 'ol.style.Stroke',
    'ol/style/Fill': 'ol.style.Fill',
    'ol/geom/Point': 'ol.geom.Point',
    'ol/proj': 'ol.proj',
    'ol/tilegrid': 'ol.tilegrid',
    'ol/format/geojson': 'ol.format.GeoJSON',
    'ol/format/mvt': 'ol.format.MVT',
    'ol/canvasmap': 'ol.CanvasMap',
    'ol/observable': 'ol.Observable',
    'ol/layer/tile': 'ol.layer.Tile',
    'ol/layer/Vector': 'ol.layer.Vector',
    'ol/layer/Vectortile': 'ol.layer.VectorTile',
    'ol/source/tilejson': 'ol.source.TileJSON',
    'ol/source/vector': 'ol.source.Vector',
    'ol/source/vectortile': 'ol.source.VectorTile',
    'ol/source/xyz': 'ol.source.XYZ'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};
