"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
let BoardService = class BoardService {
    constructor() {
        this.boards = [
            {
                id: 1,
                title: 'hello World 1',
                content: 'Content 1',
            }, {
                id: 2,
                title: 'hello World 2',
                content: 'Content 2',
            }, {
                id: 3,
                title: 'hello World 3',
                content: 'Content 3',
            }, {
                id: 4,
                title: 'hello World 4',
                content: 'Content 4',
            }, {
                id: 5,
                title: 'hello World 5',
                content: 'Content 5',
            },
        ];
    }
    findAll() {
        return this.boards;
    }
    find(id) {
        const index = this.getBoardId(id);
        return this.boards[index];
    }
    create(data) {
        const newBoard = { id: this.getNextId(), ...data };
        this.boards.push(newBoard);
        return newBoard;
    }
    update(id, data) {
        const index = this.getBoardId(id);
        if (index > -1) {
            this.boards[index] = {
                ...this.boards[index],
                ...data,
            };
            return this.boards[index];
        }
        return null;
    }
    delete(id) {
        const index = this.getBoardId(id);
        if (index > -1) {
            const deleteBoard = this.boards[index];
            this.boards.splice(index, 1);
            return deleteBoard;
        }
        return null;
    }
    getNextId() {
        return this.boards.sort((a, b) => (b.id - a.id))[0].id + 1;
    }
    getBoardId(id) {
        return this.boards.findIndex((board) => board.id === id);
    }
};
exports.BoardService = BoardService;
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)()
], BoardService);
//# sourceMappingURL=board.service.js.map