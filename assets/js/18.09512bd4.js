(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{404:function(t,r,e){"use strict";e.r(r);var a=e(54),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[t._v("#")]),t._v(" 推荐")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.mybatis.org/mybatis-3/zh/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/5kny0CYImrrVy76yo4vg1g",target:"_blank",rel:"noopener noreferrer"}},[t._v("干货分享|精讲 MyBatis 缓存机制（上）"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/7opLYz6OaNLRkc4VfelBXg",target:"_blank",rel:"noopener noreferrer"}},[t._v("干货分享|精讲 MyBatis 缓存机制（下）"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"基本知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本知识"}},[t._v("#")]),t._v(" 基本知识")]),t._v(" "),e("h3",{attrs:{id:"核心组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心组成"}},[t._v("#")]),t._v(" 核心组成")]),t._v(" "),e("ul",[e("li",[t._v("SqlSessionFactoryBuilder，用来创建SqlSessionFactory的实例，之后就没有用了，其生命周期只是在初始化的时候有作用。")]),t._v(" "),e("li",[t._v("SqlSessionFactory，MyBatis最基础的类，用来创建会话（即SqlSession的实例），其生命周期与整个系统的生命周期相同，在系统运行的任何时候都可以使用它查询到当前数据库的配置信息等。")]),t._v(" "),e("li",[t._v("SqlSession，真正的和数据库之间的会话，线程不安全，所以其生命周期和使用它的线程相同。")]),t._v(" "),e("li",[t._v("各种Mapper，承载了实际的业务逻辑，其生命周期比较短，由SqlSession创建。")])]),t._v(" "),e("h3",{attrs:{id:"和-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#和-的区别"}},[t._v("#")]),t._v(" #{}和${}的区别")]),t._v(" "),e("ul",[e("li",[t._v("#{}在底层实现上使用?做占位符来生成PreparedStatement，然后将参数传入，大多数情况都应使用这个，它更快、更安全。")]),t._v(" "),e("li",[t._v("${}将传入的数据直接显示生成在sql中。如：order by ${user_id}，如果传入的值是111,那么解析成sql时的值为order by 111, 如果传入的值是id，则解析成的sql为order by id.")])])])}),[],!1,null,null,null);r.default=s.exports}}]);