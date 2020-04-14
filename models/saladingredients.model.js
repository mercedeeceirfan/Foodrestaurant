const mongoose = require('mongoose');
module.exports = class {
    constructor(messageModel, chatModel) {
      this.messageModel = messageModel;
      this.chatModel = chatModel;
    };

}