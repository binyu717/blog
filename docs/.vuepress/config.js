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
				// javaMail/fastJson/guava等等，代码块
				['/java/javaMail', 'java mail的使用'],
				['/java/websocket', 'websocket相关'],
				['/java/tomcat', 'tomcat记录'],
				['/java/hibernate-validation','validation记录']
			]		
		},{
			title: '算法',
			collapsable: true,
			children: [
			]		
		},{
			title: '设计模式',
			collapsable: true,
			children: [
				['/pattern/designPattern', '设计模式笔记'],
			]		
		},{
			title: '数据库',
			collapsable: true,
			children: [
				['/database/mysql', 'mysql'],
				['/database/redis', 'redis'],
			]
		},{
			title: '框架、组件',
			collapsable: true,
			children: [
				['/framework/elasticsearch', 'elasticsearch'],
				['/framework/mybatis', 'mybatis'],
				['/framework/quartz', 'quartz'],
				['/framework/nginx', 'nginx'],
				['/framework/git', 'git'],
				['/framework/spring', 'spring'],
				['/framework/oauth2.0', 'oauth2.0'],
				['/framework/mock', 'mock'],
				['/framework/dubbo', 'dubbo'],
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
			title: '网络技术',
			collapsable: true,
			children: [
				['/network/networkBase', '相关文章'],
			]
		},{
			title: '面试',
			collapsable: true,
			children: [
				['/interview/interviewQuestionBank', '面试题库'],
			]
		},{
			title: '阅读',
			collapsable: true,
			children: [
				['/read/reprintLink', '书签'],
			]
		},{
			title: '零散笔记',
			collapsable: true,
			children: [
				// 平日里遇到的零散知识点
				['/note/misc', '杂记'],
				['/note/bat', 'bat'],
			]
		}]
	
	}
}