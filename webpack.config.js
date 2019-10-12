const Path = require('path');

module.exports = (_env, argv) => {
	const postfix = (argv.mode === 'production') ?
		'.min' :
		'';
	return {
		devtool: false,
		entry: {
			bundle: Path.resolve(__dirname, 'src/main/js/index.js'),
		},
		output: {
			path: Path.resolve(__dirname, 'docs/assets/'),
			filename: `aerodial${postfix}.js`,
			// See: https://github.com/webpack/webpack/issues/6522
			globalObject: 'typeof self !== \'undefined\' ? self : this',
			library: {
				amd: 'aerodial',
				commonjs: 'aerodial',
				root: 'Aerodial',
			},
			libraryTarget: 'umd',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: [Path.resolve(__dirname, 'src/main/js/')],
					exclude: /node_modules/,
					loader: 'babel-loader',
				}, {
					test: /\.s?css$/,
					include: [Path.resolve(__dirname, 'src/main/sass/')],
					exclude: /node_modules/,
					use: [
						{
							loader: 'css-loader',
						}, {
							loader: 'postcss-loader',
						}, {
							loader: 'sass-loader',
							options: {
								outputStyle: 'compressed',
							},
						}
					],
				},
			],
		},
		resolve: {
			extensions: ['.js'],
		},
	};
};