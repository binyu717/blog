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
				// JAVA 知识点整理归纳
				['/java/javaBase', 'java知识点'],
				['/java/arithmetic', '算法'],
				// javaMail/fastJson/guava等等，代码块
				['/java/experience', '一些工具类的使用'],
				['/java/websocket', 'websocket相关']
			]		
		},{
			title: '开发周边',
			collapsable: true,
			children: [
				['/framework/elasticsearch', 'elasticsearch'],
				['/framework/mybatis', 'mybatis'],
				['/framework/quartz', 'quartz'],
				['/framework/nginx', 'nginx'],
				['/framework/git', 'git'],
				['/framework/redis', 'redis'],
				['/framework/spring', 'spring'],

			]
		},{
			title: '网络技术',
			collapsable: true,
			children: [
				['/network/networkBase', '知识点'],
			]
		},{
			title: 'sql',
			collapsable: true,
			children: [
				['/sql/mysql', 'mysql'],
			]
		},{
			title: 'tomcat',
			collapsable: true,
			children: [
				['/tomcat/tomcatBase', '知识点'],
			]
		},{
			title: 'linux',
			collapsable: true,
			children: [
				['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'docker',
			collapsable: true,
			children: [
				['/docker/docker', 'docker学习'],
				['/docker/docker_others', 'docker与其他'],
			]
		},{
			title: '面试',
			collapsable: true,
			children: [
				['/interview/interviewQuestionBank', '面试题库'],
			]
		},{
		title: '时光里',
		collapsable: true,
		children: [
			['/daily/reprintLink', '优秀站点'],
			// 平日里遇到的零散知识点
			['/daily/misc', '杂记'],
		]
		}]
	
	}
}