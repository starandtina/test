define(['jquery', 'underscore', 'backbone', 'text!modules/login/loginView.html'], function ($, _, Backbone, loginViewTemplate) {
    var loginView = Backbone.View.extend({
        template: _.template(loginViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return loginView;
});