Ext.define("app.view.article.ArticleForm", {
	extend : "Ext.form.Panel",
	alias : "widget.articleform",
	requires : [ "app.view.article.ArticleController", "app.view.article.ArticleModel", "Ext.ux.TreePicker" ],
	controller : "article",
	viewModel : "article",
	url : Ext.ctx + "/article/save",
	bodyPadding : 5,
	border : false,
	frame : false,
	scrollable : true,
	layout : "anchor",
	defaults : {
		anchor : "90%"
	},
	fieldDefaults : {
		labelAlign : "right",
		labelWidth : 120
	},
	items : [ {
		bodyPadding : 5,
		border : false,
		frame : false,
		scrollable : true,
		layout : "anchor",
		defaults : {
			anchor : "90%"
		},
		defaultType : "textfield",
		items : [ {
			xtype : "hiddenfield",
			name : "id"
		}, {
			fieldLabel : "文章分类",
			name : "articleCategory",
			xtype : "treepicker",
			displayField : "name",
			valueField : "id",
			rootVisible : false,
			allowBlank : false,
			store : Ext.create("app.store.ArticleCategories", {
				rootVisible : false
			})
		}, {
			fieldLabel : "标题",
			name : "title",
			allowBlank : false
		}, {
			fieldLabel : "作者",
			name : "author"
		}, {
			xtype : "fieldcontainer",
			fieldLabel : "设置",
			layout : {
				type : "hbox",
				align : "left"
			},
			defaultType : "checkbox",
			items : [ {
				boxLabel : "是否发布",
				hideLabel : true,
				name : "isPublication"
			}, {
				boxLabel : "是否置顶",
				hideLabel : true,
				name : "isTop"
			} ]
		}, {
			fieldLabel : "SEO标题",
			name : "seoTitle"
		}, {
			fieldLabel : "SEO关键字",
			name : "seoKeywords"
		}, {
			fieldLabel : "SEO描述",
			name : "seoDescription"
		} ]
	} ],
	buttonAlign : "left",
	buttons : [ {
		text : "保存",
		formBind : true,
		handler : "onFormSave"
	} ]
});