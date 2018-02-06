describe('testing test manager application', function(){



    it('add a todo task', function(){
        console.log("running test case.");

        var text = ['write test case', 'give design', 'doing task to be deleted', 'done task to be deleted', 'todo task to be deleted', 'get suggestion'];

        browser.get("http://localhost:8080/");
        //browser.sleep(1000)

        var taskText = element(by.model('td.todoTask'));
        var addButton = element(by.buttonText('add'));


        // Add todo tasks
        console.log("------- Add todo task -------------")
        for(let i=0;i<text.length;i++){
            console.log("adding : "+text[i]);
            taskText.sendKeys(text[i]);
            addButton.click();
        }
       // browser.sleep(2000);
        


        // Check displayed todo tasks
        console.log("------- check todo task -------------")
        element.all(by.xpath('//div[1]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){
            console.log("Displayed todo task :"+res)
            console.log("todo task in array: "+ text);
            browser.debugger();
            for(let i=0;i<res.length;i++){
                expect(res[i]).toEqual(text[i]);
            }
            
        })

        
        // click delete button
        console.log("------- delete todo task -------------")
        console.log("removing : "+element(by.xpath('//div[1]/div[2]/table/tbody/tr[5]/td[1]')).getText());
        element(by.xpath('//div[1]/div[2]/table/tbody/tr[5]/td[3]')).click()



        // remove todo task from text array.
        console.log("------- removing todo task from array -------------")
        console.log("removing from array :"+text[4])
        text.splice(4,1);
        console.log("after removing todo task, text :")
        console.log(text)

        // after delete button is clicked, check the todo task
        console.log("------- checking todo task -------------")
        element.all(by.xpath('//div[1]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){
            console.log(res);
            console.log(text);
            
            for(let i=0;i<res.length;i++){
                expect(res[i]).toEqual(text[i]);
            }            
        });




        // // Move all to do task to doing task
        // console.log("------- Moving todo task to doing task -------------")
        // for(let i=0;i<5;i++){
        //     element(by.xpath('//div[1]/div[2]/table/tbody/tr[1]/td[2]')).click()
        // }
        // browser.sleep(2000)
        
        // // TODO task need to be empty
        // console.log("------- checking todo task to be empty -------------")
        // element.all(by.xpath('//div[1]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){
        //     console.log('checking todo tasks : '+res)
        //     expect(res).toEqual([])
        // });

        // browser.sleep(3000);
        
        // // check the doing task
        // console.log("-------- checking doing task -----------")
        // element.all(by.xpath('//div[2]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){
        //     for(let i=0;i<res.length;i++){
        //         expect(res[i]).toEqual(text[i]);
        //     }
        // });

        // // delete the doing task
        // console.log("-------- delete doing task -----------")
        // element(by.xpath('//div[2]/div[2]/table/tbody/tr[3]/td[3]')).click();
        // browser.sleep(3000);

        // text.splice(2,1);
        // console.log("-------- removing doing task -----------")
        // console.log("after deleting the doing task text:");
        // console.log(text);

        // console.log("-------- checking doing task -----------")
        // element.all(by.xpath('//div[2]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){
        //     console.log("res:")
        //     console.log(res);
        //     for(let i=0;i<res.length;i++){
        //         expect(res[i]).toEqual(text[i]);
        //     }
        // })




/*         //move the task to done task
        console.log("-------- moving doing task to done task -----------")
        for(let i=0;i<4;i++){
            element.all(by.xpath('//div[2]/div[2]/table/tbody/tr[1]/td[2]')).click();
        }
        browser.sleep(3000);

        // after all task is move to done task, check the doing task
        element.all(by.xpath('//div[2]/div[2]/table/tbody/tr/td[1]')).getText().then(function(res){
            console.log("doing task after moving to done task :")
            console.log(res)
            expect(res).toEqual([])
        })
 */

        

    });


    
});