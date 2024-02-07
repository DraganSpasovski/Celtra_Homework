Feature('expandable');

Scenario('test something', ({ I, locatorsPage }) => {

    I.amOnPage('https://test.celtra.com/preview/f576e12f#overrides.deviceInfo.deviceType=Phone')
    
    I.waitForElement(locatorsPage.objects.bigDaddyIframe1,20)

    locatorsPage.verifyPhoneDiv()

    within({frame: locatorsPage.objects.bigDaddyIframe1}, () => {
        
    
        I.waitForElement(locatorsPage.objects.bigDaddyIframe2,20)
        I.switchTo(locatorsPage.objects.bigDaddyIframe2)
        locatorsPage.verifyExpandable()
        I.click(locatorsPage.objects.ExpandableButtonDiv)

    });

    within({frame:locatorsPage.objects.bigDaddyIframe1}, () => {

        I.waitForElement(locatorsPage.objects.bigDaddyIframe3,20)
        I.switchTo(locatorsPage.objects.bigDaddyIframe3)
        locatorsPage.verifyModalUnit()
        I.click(locatorsPage.objects.ClickableLogoDiv)
        I.dontSeeElement(locatorsPage.objects.ClickableLogoDiv)

        I.click(locatorsPage.objects.CloseButtonModalUnit)
        I.dontSeeElement(locatorsPage.objects.bigDaddyIframe3)

    });

    within({frame: locatorsPage.objects.bigDaddyIframe1}, () => {

        I.switchTo(locatorsPage.objects.bigDaddyIframe2)
        locatorsPage.verifyExpandable()

    });
});

