export interface Register {
    name:string,
    email:string,
    password:string,
    rePassword:string
}

export interface Login {
    email:string,
    password:string,
    _id?:string
}
