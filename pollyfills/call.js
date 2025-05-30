Function.prototype.myCall= function(context={},...args){
    if(typeof this !== 'function') throw new Error('this is not called on a function')
    context.fn=this;
    context.fn(...args);
    }







let car1 ={
    color:'red',
    company:'Mahindra'
}

function purchaseCar(price, currency){
    console.log(`I have ${this.company}, ${this.color},${price},${currency}`)
}

const add=(a,b)=>{
    return a+b
}

purchaseCar.myCall(car1, 2000,'rupee');