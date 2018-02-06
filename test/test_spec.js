var homePage = require('./homepage.js')
var protractorPage = require('./protractorpage.js')


var todoTasks = ['task1', 'task2', 'task3'];
var doingTask = ['task2', 'task3'];
var doneTask = ['task3'];

describe('testing test manager application', function(){

    beforeEach(function(){
        homePage.getPage();
    });


    it('check if todoManager application is displayed', function(){
        expect(homePage.getTitle()).toEqual('Task Manager');
        expect(homePage.getHeadingText()).toEqual('Task Manager');
    })


    it('performs overall testing', function(){

        // Todo Task testing
        for(let i=0; i<todoTasks.length; i++){
            homePage.setTodoTask(todoTasks[i]);
            homePage.clickAddButton();
        }


        homePage.checkTodoTask(todoTasks);


        homePage.clickTodoDeleteButton(1);
             

        homePage.clickTodoProcessButton(1);
        homePage.clickTodoProcessButton(1);



        // Doing Tasks testing   
        homePage.checkDoingTask(doingTask);
        
        homePage.clickDoingDoneButton(2);
        

        homePage.clickDoingDeleteButton(1)
        
                

        // Done task Testing
        homePage.checkDoneTask(doneTask);
        
        homePage.clickDoneDeleteButton(1);

    });


    it('Checks proper worker of "Protractor Api" link', function(){
        // redirects to Protractor page.
        homePage.clickProtractorApiLink();

        protractorPage.checkHeadingText('Protractor API')
    })

});

        