angular.module('starter.services', [])
  .factory('Events', function () {
    var events = [
      {
        id: '1',
        title: 'Shaun invites you to join',
        name: 'Color Run 2015, Chengdu',
        status: '102/500 Joined',
        content: 'Lorem ipsum dolor sit amet, consectetur ouoi adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra Proin gravida dolor sit amet lacus acc umsan consectetur adipiscing elit sitrwd iybc...',
        address: 'Warter Park, Chengdu',
        date: 'Oct 19, 2015'
  }, {
        id: '2',
        title: 'June invites you to join',
        name: 'Color Run 2015, Chengdu',
        status: '102/500 Joined',
        content: 'Lorem ipsum dolor sit amet, consectetur ouoi adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra Proin gravida dolor sit amet lacus acc umsan consectetur adipiscing elit sitrwd iybc...',
        address: 'Warter Park, Chengdu',
        date: 'Oct 19, 2015'
  }, {
        id: '3',
        title: 'Khalil joined',
        name: 'Color Run 2015, Chengdu',
        status: '102/500 Joined',
        content: 'Lorem ipsum dolor sit amet, consectetur ouoi adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra Proin gravida dolor sit amet lacus acc umsan consectetur adipiscing elit sitrwd iybc...',
        address: 'Warter Park, Chengdu',
        date: 'Oct 19, 2015'
  }
  ];

    return {
      all: function () {
        return events;
      },
      get: function (eventId) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === eventId) {
            return events[i];
          }
        }
        return null;
      }
    };
  }).factory('MyEvents', function () {
    var events = [
      {
        id: '1',
        title: 'Shaun invites you to join',
        name: 'Color Run 2015, Chengdu',
        status: 'Up Coming',
        content: 'Lorem ipsum dolor sit amet, consectetur ouoi adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra Proin gravida dolor sit amet lacus acc umsan consectetur adipiscing elit sitrwd iybc...',
        address: 'Warter Park, Chengdu',
        date: 'Oct 19, 2015'
  }, {
        id: '2',
        title: 'June invites you to join',
        name: 'Color Run 2015, Chengdu',
        status: 'In Progress',
        content: 'Lorem ipsum dolor sit amet, consectetur ouoi adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra Proin gravida dolor sit amet lacus acc umsan consectetur adipiscing elit sitrwd iybc...',
        address: 'Warter Park, Chengdu',
        date: 'Oct 19, 2015'
  }, {
        id: '3',
        title: 'Khalil want to join it',
        name: 'Color Run 2015, Chengdu',
        status: 'Rescheduled',
        content: 'Lorem ipsum dolor sit amet, consectetur ouoi adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra Proin gravida dolor sit amet lacus acc umsan consectetur adipiscing elit sitrwd iybc...',
        address: 'Warter Park, Chengdu',
        date: 'Oct 19, 2015'
  }
  ];

    return {
      all: function () {
        return events;
      },
      get: function (eventId) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === eventId) {
            return events[i];
          }
        }
        return null;
      }
    };
  })
  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
