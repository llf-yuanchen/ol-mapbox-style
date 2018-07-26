const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const banner = `
    ol-mapbox-style
    Copyright 2016-present Boundless Spatial
    Copyright© 2000-2018 SuperMap Software Co. Ltd
    github: https://github.com/boundlessgeo/ol-mapbox-style
    github: https://github.com/SuperMap/ol-mapbox-style
    license: BSD 2-Clause "Simplified" License
    version: v${pkg.version}
`;
module.exports = {
  entry: './olms.js',
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
    'ol/format/GeoJSON': 'ol.format.GeoJSON',
    'ol/format/MVT': 'ol.format.MVT',
    'ol/Map': 'ol.Map',
    'ol/Observable': 'ol.Observable',
    'ol/layer/Tile': 'ol.layer.Tile',
    'ol/layer/Vector': 'ol.layer.Vector',
    'ol/layer/VectorTile': 'ol.layer.VectorTile',
    'ol/source/TileJSON': 'ol.source.TileJSON',
    'ol/source/Vector': 'ol.source.Vector',
    'ol/source/VectorTile': 'ol.source.VectorTile',
    'ol/source/XYZ': 'ol.source.XYZ'
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
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
