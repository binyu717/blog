module.exports = {
	base: '/blog/',
	title: 'JAVA之路',
	description: '行你所行，听从你心',
	port: 8888,
	head: [
		['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./avatar.png` }]
	  ],
	themeConfig: {
		nav: [{
			text: 'vuepress',
			link: 'http://caibaojian.com/vuepress/'
		}],
		sidebar: [{
			title: 'java',
			collapsable: true,
			children: [
				['/java/javaBase', 'java基础'],
				['/java/arithmetic', '算法'],
				['/java/experience', '历程'],
				['/java/git', 'git学习']
			]
			
		// },{
		// 	title: 'mysql数据库',
		// 	collapsable: true,
		// 	children: [
		// 		['/mysql/mysqlBase', 'mysql基础'],
		// 	]
		// },{
		// 	title: 'spring',
		// 	collapsable: true,
		// 	children: [
		// 		['/spring/springBase', 'spring基础'],
		// 	]
		},{
			title: 'mybatis',
			collapsable: true,
			children: [
				['/mybatis/mybatisBase', '基础'],
			]
		// },{
		// 	title: 'linux',
		// 	collapsable: false,
		// 	children: [
		// 		['/linux/linuxBase', '基础'],
		// 	]
		},{
			title: 'tomcat',
			collapsable: false,
			children: [
				['/tomcat/tomcatBase', '基础'],
			]
		// },{
		// 	title: '开发工具',
		// 	collapsable: false,
		// 	children: [
		// 		['/ide/ideBase', '基础'],
		// 	]
		// },{
		// 	title: '网络技术',
		// 	collapsable: false,
		// 	children: [
		// 		['/network/networkBase', '基础'],
		// 	]
		},{
			title: 'docker',
			collapsable: false,
			children: [
				['/docker/docker', '基本命令'],
			]
			},{
		title: '日常',
		collapsable: true,
		children: [
			['/daily/reprintLink', '优秀文章转载'],
			['/daily/misc', '所见所闻'],
		]
		}]
		
	}
}