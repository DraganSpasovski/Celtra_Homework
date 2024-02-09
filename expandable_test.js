Feature('expandable');

Scenario('Celtra_tests', ({ I, locatorsPage }) => {

    //Verify that I am on desired page - 'https://test.celtra.com/preview/f576e12f#overrides.deviceInfo.deviceType=Phon'

    I.amOnPage('https://test.celtra.com/preview/f576e12f#overrides.deviceInfo.deviceType=Phone')
    
    //Wait for phone div and iframe to load

    I.waitForElement(locatorsPage.objects.phoneDiv,20)
    I.waitForElement(locatorsPage.objects.bigDaddyIframe1,20)
    
    //Verify that the phone div looks as expected

    locatorsPage.verifyPhoneDiv()

    within({frame: locatorsPage.objects.bigDaddyIframe1}, () => {
        
        //Wait for 'Expandable' button iframe to load

        I.waitForElement(locatorsPage.objects.bigDaddyIframe2, 20)

        //Switch to 'Expandable' button iframe

        I.switchTo(locatorsPage.objects.bigDaddyIframe2)

        //Verify button looks as expected

        locatorsPage.verifyExpandable()

        //Click the button

        I.click(locatorsPage.objects.ExpandableButtonDiv)

        //Exit iframe

    });

    within({frame:locatorsPage.objects.bigDaddyIframe1}, () => {

        //Wait for to 'Modal Unit' iframe to load

        I.waitForElement(locatorsPage.objects.bigDaddyIframe3, 20)

        //Switch to 'Modal Unit' iframe to load

        I.switchTo(locatorsPage.objects.bigDaddyIframe3)

        //Verify 'Modal Unit' iframe is as expected

        locatorsPage.verifyModalUnit()

        //Click logo and see that it disappears

        I.click(locatorsPage.objects.ClickableLogoDiv)
        I.dontSeeElement(locatorsPage.objects.ClickableLogoDiv)

        //Click close button and see that the 'Modal Unit' disappears

        I.click(locatorsPage.objects.CloseButtonModalUnit)
        I.dontSeeElement(locatorsPage.objects.bigDaddyIframe3)

        //Exit iframe

    });

    within({frame: locatorsPage.objects.bigDaddyIframe1}, () => {

        //Switch back to 'Expandable' button iframe

        I.switchTo(locatorsPage.objects.bigDaddyIframe2)

        //Verify that it is as expected

        locatorsPage.verifyExpandable()

    });
});

