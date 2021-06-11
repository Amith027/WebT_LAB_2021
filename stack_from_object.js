class Stack{
    constructor(){
        this.arr = []
    }

    push(item){
        return this.arr.push(item);
    }

    pop(){
        if(this.arr.length>0){
            return this.arr.pop();
        }
    }

    disp(){
        if(this.arr.length>0){
            console.log("Displaying stack items:")
            for(let i=0; i<this.arr.length; i++){
                console.log(this.arr[i])
            }
        }
        console.log()
    }

    clear(){
        this.arr = []
    }  
}

let stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log("After pushing")
stack.disp()
stack.pop()
console.log("After popping")
stack.disp()
stack.clear()