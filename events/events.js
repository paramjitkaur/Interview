class event{
    constructor(){
        this.events = {}
    }
    on(eventName,callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback)
        }
        else
        {
            this.events[eventName]=[callback]
        }
    }
    trigger(eventName)
    {
        if(his.events[eventName]){
            for(const cb of this.events[eventName])
            {
                cb()
            }
        }
    }
    off(eventName)
    {
        delete this.events[eventName]
    }
   
}