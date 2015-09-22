define(['jquery', 'underscore', 'backbone', 'text!modules/campsitemap/campsitemapView.html'], function ($, _, Backbone, campsitemapViewTemplate) {
    var campsitemapView = Backbone.View.extend({
        template: _.template(campsitemapViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return campsitemapView;
});