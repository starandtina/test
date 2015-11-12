define(['jquery', 'underscore', 'backbone', 'text!modules/search/searchView.html'], function ($, _, Backbone, searchViewTemplate) {
    var searchView = Backbone.View.extend({
        template: _.template(searchViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return searchView;
});