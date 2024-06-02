export declare class BoardService {
    private boards;
    findAll(): {
        id: number;
        title: string;
        content: string;
    }[];
    find(id: number): {
        id: number;
        title: string;
        content: string;
    };
    create(data: any): any;
    update(id: number, data: any): {
        id: number;
        title: string;
        content: string;
    };
    delete(id: number): {
        id: number;
        title: string;
        content: string;
    };
    getNextId(): number;
    private getBoardId;
}
