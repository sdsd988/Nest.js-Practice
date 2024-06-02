import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {

  private boards = [
    {
      id: 1,
      title: 'hello World 1',
      content: 'Content 1',
    },   {
      id: 2,
      title: 'hello World 2',
      content: 'Content 2',
    },   {
      id: 3,
      title: 'hello World 3',
      content: 'Content 3',
    },   {
      id: 4,
      title: 'hello World 4',
      content: 'Content 4',
    },   {
      id: 5,
      title: 'hello World 5',
      content: 'Content 5',
    },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.getBoardId(id);

    return this.boards[index];
  }

  create(data) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard
  }

  update(id:number, data){
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

  delete(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index,1)
      return deleteBoard;
    }
    return null;
  }

  getNextId() {
    return this.boards.sort((a, b) => (b.id - a.id))[0].id+1;
  }

  private getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }
}
