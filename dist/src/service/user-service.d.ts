export declare class UserService {
    private userService;
    constructor();
    findAll: () => Promise<any>;
    register: (data: any) => Promise<any>;
    removeUser: (id: any) => Promise<any>;
    editUser: (id: any, data: any) => Promise<any>;
}
