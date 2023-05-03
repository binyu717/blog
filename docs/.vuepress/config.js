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
				// ['/java/javaMail', 'java mail的使用']
			]		
		},{
			title: 'mysql',
			collapsable: true,
			children: [
			]		
		},{
			title: 'oracle',
			collapsable: true,
			children: [
				// ['/pattern/designPattern', '设计模式笔记'],
			]		
		},{
			title: 'postgresql',
			collapsable: true,
			children: [
				// ['/database/mysql', 'mysql'],
				// ['/database/redis', 'redis'],
			]
		},{
			title: 'redis',
			collapsable: true,
			children: [
			]
		},{
			title: 'web',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'mybatis',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'maven',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'git',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'nginx',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'linux',
			collapsable: true,
			children: [
				['/linux/基本命令', '基本命令'],
			]
		},{
			title: 'windows',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: 'docker',
			collapsable: true,
			children: [
				// ['/linux/linuxBase', '知识点'],
			]
		},{
			title: '单元测试',
			collapsable: true,
			children: [
				// ['/unit/linuxBase', '知识点'],
			]
		},{
			title: '问题积累',
			collapsable: true,
			children: [
				// ['/question/bat', 'bat']
			]
		},{
			title: '设计模式',
			collapsable: true,
			children: [
				// ['/patternDesign/docker', 'docker学习']
			]
		},{
			title: '工具',
			collapsable: true,
			children: [
				// ['/tool/networkBase', '相关文章'],
			]
		},{
			title: '面试',
			collapsable: true,
			children: [
				// ['/interview/interviewQuestionBank', '面试题库'],
			]
		},{
			title: '读书笔记',
			collapsable: true,
			children: [
				// ['/read/reprintLink', '书签'],
			]
		}
	]
	
	}
}