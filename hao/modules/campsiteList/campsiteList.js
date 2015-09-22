define(['jquery', 'underscore', 'backbone', 'text!modules/campsitelist/campsitelistView.html'], function ($, _, Backbone, campsitelistViewTemplate) {
    var campsitelistView = Backbone.View.extend({
        template: _.template(campsitelistViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return campsitelistView;
});