import React from 'react';

export class Storage{
    constructor(){
        
    }
    get(key: string){
        return  sessionStorage.getItem(key)
    }

    set(key: string, value){
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    remove(key: string){
        sessionStorage.removeItem(key);
    }

    clear(){
        sessionStorage.clear();
    }    
}

//     localStorage.setItem('userEmail', response.data.email);
//     localStorage.setItem('userPassword', response.data.password);
