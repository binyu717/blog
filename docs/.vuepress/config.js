module.exports = {
	base: '/blog/',
	title: 'Hello VuePress',
	description: 'Just playing around',
	themeConfig: {
		nav: [{
			text: 'vuepress',
			link: 'http://caibaojian.com/vuepress/'
		}],
		sidebar: [{
			title: '基础',
			collapsable: false,
			children: [
				['/base/java', 'java基础'],
				['/base/tomcat', 'java基础']
			]
		}]
	}
}