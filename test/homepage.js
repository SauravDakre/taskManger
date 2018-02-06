module.exports = {

    sleep: function(){
        browser.sleep(2000);
    },

    getTitle: function(){
        return browser.getTitle();
    },

    getHeadingText: function(){
        return element(by.tagName('h1')).getText()
    },

    getPage : function(){
        browser.get("http://localhost:8080/");
    },

    setTodoTask: function(task){
        element(by.model('td.todoTask')).sendKeys(task);
    },

    clickAddButton: function(){
        element(by.buttonText('add')).click();
    },

    clickTodoProcessButton: function(index){
        element(by.xpath('//div[1]/div[2]/table/tbody/tr['+index+']/td[2]')).click();
    },

    clickTodoDeleteButton: function(index){
        element(by.xpath('//div[1]/div[2]/table/tbody/tr['+index+']/td[3]')).click();
    },

    checkTodoTask : function(todoTask){
        element.all(by.xpath('//div[1]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){  
            console.log('tasks : '+res);
            console.log('todo : '+todoTask);
            for(let i=0; i<res.length;i++){
                expect(res[i]).toEqual(todoTask[i]);
            } 
        });
    },

    clickDoingDeleteButton: function(index){
        element(by.xpath('//div[2]/div[2]/table/tbody/tr['+index+']/td[3]')).click();
    },

    clickDoingDoneButton: function(index){
        element(by.xpath('//div[2]/div[2]/table/tbody/tr['+index+']/td[2]')).click();
    },

    getDoingTasks : function(){
        return element.all(by.xpath('//div[2]/div[2]/table/tbody/tr/td[1]')).getText()
    },


    checkDoingTask : function(doingTask){
        element.all(by.xpath('//div[2]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){  
            console.log('tasks : '+res);
            console.log('todo : '+doingTask);
            for(let i=0; i<res.length;i++){
                expect(res[i]).toEqual(doingTask[i]);
            } 
        });
    },

    clickDoneDeleteButton: function(index){
        element(by.xpath('//div[3]/div[2]/table/tbody/tr['+index+']/td[2]')).click();
    },

    checkDoneTask: function(doneTask){
        element.all(by.xpath('//div[3]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){  
            console.log('tasks : '+res);
            console.log('todo : '+doneTask);
            for(let i=0; i<res.length;i++){
                expect(res[i]).toEqual(doneTask[i]);
            } 
        });
    },

    clickProtractorApiLink: function(){
        element(by.linkText('Protractor Api')).click();
    }

}