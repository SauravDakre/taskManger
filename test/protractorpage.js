module.exports = {
    checkHeadingText: function(headingText){
        element(by.xpath('//div/div/div[1]/h3')).getText().then(function(txt){
            expect(txt).toContain(headingText)
        
        });
    }
}