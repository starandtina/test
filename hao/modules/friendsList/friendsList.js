define(['jquery', 'underscore', 'backbone', 'text!modules/friendsList/friendsListView.html'], function ($, _, Backbone, friendsListViewTemplate) {
    var friendsListView = Backbone.View.extend({
        template: _.template(friendsListViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return friendsListView;
});