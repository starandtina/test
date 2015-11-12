define(['jquery', 'underscore', 'backbone', 'text!modules/mine/mineView.html'], 
	function ($, _, Backbone, mineViewTemplate) {
    var mineView = Backbone.View.extend({
        template: _.template(mineViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return mineView;
});