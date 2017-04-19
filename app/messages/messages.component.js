"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var messages_service_1 = require('./messages.service');
var MessagesComponent = (function () {
    function MessagesComponent(service) {
        this.title = "hello world!";
        this.messages = service.getMessages();
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'messages',
            template: "<h1>Messages</h1>\n    <input type=\"text\" [(ngModel)]=\"title\" />\n    <ul>\n        <li *ngFor=\"let m of messages\">{{ m }}</li>\n    </ul>\n    ",
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map