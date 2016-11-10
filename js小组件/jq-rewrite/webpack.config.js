var webpack = require('webpack');
var path = require('path');

var base = {
	// 页面入口文件配置
	entry: {
		index: path.join(__dirname, 'src/index.js')
	},
	// 入口文件输出配置
	output: {
		path: __dirname + '/lib/',
		filename: 'app.js'
	},
	module: {
		// 加载器配置
		loaders:[
			{
				text: /\.js$/, //判断当文件类型为js的时候,进行es6的转义
				exclude: /node_modules/, //忽视exclude下的文件,不进行转义
				loader:'babel-loader'
			}
		]
	},
	// 全局引用jquery
	externals: {
		jquery: 'window.$'
	},
	resolve: {
		// 这特么真的是巨坑,在WINDOWS环境下必须加root. ps:我也不知道为什么╮(╯▽╰)╭,据说mac的不需要没有经过测试
		root:[
			path.join(__dirname + '/src'),
			path.join(__dirname + '/node_modules'),
			path.join(__dirname + '/lib'),
			path.join(__dirname)
		],
		// 这里用来指定模块的后缀,这样你再引入模块的时候就不需要再写后缀名了
        extensions: ['', '.js', '.json', '.less']
    },
}

module.exports = base;