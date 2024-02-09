const { I } = inject();

module.exports =  {

  // insert your this.objects and methods here

    objects:
    {
        //Big Daddy iframe locators

        bigDaddyIframe1: '//span[contains(@data-field,"frameUrl")]/iframe',
        bigDaddyIframe2: '//div[@class="notranslate"]/iframe',
        bigDaddyIframe3: '//*[@class="notranslate celtra-expanded-ad"]/iframe',

        //Phone Div locator

        phoneDiv: '//div[@data-field="device"]',
        
        //Expandable button locators

        ExpandableBannerDiv: 'div#celtra-banner',
        ExpandableBackgroundBlueDiv: 'div#celtra-object-75',
        ExpandableBackgroundBlue: '//*[@id="celtra-object-75"]/div',
        ExpandableBackgroundGreenDiv: 'div#celtra-object-69',
        ExpandableBackgroundGreen: '//*[@id="celtra-object-69"]/div',
        ExpandableTextDiv: 'div#celtra-object-76',
        ExpandableText: '//*[@id="celtra-object-76"]/div/div[1]',
        ExpandableButtonDiv: 'div#celtra-object-104',
        
        ExpandableCeltraLogoDiv: 'div#celtra-object-77',
        ExpandableCeltraLogo: '//*[@id="celtra-object-77"]/div',

        //Modal unit locators

        ModalUnitBackgroundGrayDiv: 'div#celtra-modal',
        ModalUnitBackgroundBlueDiv: 'div#celtra-object-37',
        ModalUnitBackgroundBlue: '//*[@id="celtra-object-37"]/div',
        ModalUnitBackgroundGreenDiv: 'div#celtra-object-36',
        ModalUnitBackgroundGreen: '//*[@id="celtra-object-36"]/div',
        ModalUnitText: '//*[@id="celtra-object-38"]/div/div[1]',
    
        ClickableLogoDiv: 'div#celtra-object-41',
        CeltraLogoModalUnit: '//*[@id="celtra-object-41"]/div',

        CloseButtonModalUnit: '//*[@class="celtra-close-button touchable celtra-close-button-up"]'
    },

    
    verifyExpandable()
    {   
        //Check for Expandable Banner div and its CSS properties

        I.seeElement(this.objects.ExpandableBannerDiv)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBannerDiv,
            {

                'background-color': 'rgb(153, 153, 153)',
                'position': 'absolute',
                'width': '320px',
                'height': '50px',
                'margin-left': '-160px',
                'margin-top': '-25px'

            })

        //Check for Blue background div and its CSS properties
            
        I.seeElement(this.objects.ExpandableBackgroundBlueDiv)    
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundBlueDiv,
            {

                'touch-action': 'manipulation',
                'position': 'absolute',

                // Cant get this to work??

                // 'transform-origin': '50% 50%',
                
                'left': '5px',
                'top': '5px',
                'width': '310px',
                'height': '40px',
                'z-index': '10001',
                'opacity': '1',

            })

        //Check for Blue background and its CSS properties
        
        I.seeElement(this.objects.ExpandableBackgroundBlue)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundBlue,
            {

                'background-color': 'rgb(0, 0, 204)',

            })


        //Check for Green background div and its CSS properties

        I.seeElement(this.objects.ExpandableBackgroundGreenDiv)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundGreenDiv,
            {

                'touch-action': 'manipulation',
                'position': 'absolute',

                // Cant get this to work??

                //'transform-origin': '50% 50%',

                'left': '0px',
                'top': '0px',
                'width': '320px',
                'height': '50px',
                'z-index': '1',
                'opacity': '1',
                'display': 'block'

            })

        //Check for Green background and its CSS properties        
        
        I.seeElement(this.objects.ExpandableBackgroundGreen)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundGreen,
            {

                'background-color': 'rgb(0, 204, 204)',
            
            })

        //Check for Text div and its CSS properties

        I.seeElement(this.objects.ExpandableTextDiv)
        I.seeCssPropertiesOnElements(this.objects.ExpandableTextDiv,
            {

                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'z-index': '10005',
                'opacity': '1',

            })

        //Check for Text and its CSS properties
    
        I.seeElement(this.objects.ExpandableText)
        I.see('Expandable', this.objects.ExpandableText)
        I.seeCssPropertiesOnElements(this.objects.ExpandableText,
            {

                'font-family': 'Arial',
                'font-style': 'normal',
                'font-weight': '400',
                'text-align': 'left',
                'font-size' : '34px',
                'color' :'rgb(255, 255, 255)'
            
            })

        //Check for Celtra Logo div and its CSS properties
        
        I.seeElement(this.objects.ExpandableCeltraLogoDiv)
        I.seeCssPropertiesOnElements(this.objects.ExpandableCeltraLogoDiv,
            {

                'position': 'absolute',
                'left': '225px',
                'top': '5px',
                'width': '90px',
                'height': '40px',
                'z-index': '10006',
                'opacity': '1',

            })

        //Check for Celtra logo and its CSS properties

        I.seeElement(this.objects.ExpandableCeltraLogo)
        I.seeCssPropertiesOnElements(this.objects.ExpandableCeltraLogo,
            {

                'background-image': 'url("https://cache-ssl.celtra.com/api/blobs/2b573ab4a5c93f1b512a4f4f021529bd4310021926ce619c1e14606aa7828092/celtra-logo.png?transform=crush")'
            
            })

    },

    verifyModalUnit()
    {
        //Check for Gray background div and its CSS properties

        I.seeElement(this.objects.ModalUnitBackgroundGrayDiv)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundGrayDiv, 
            {

                'background-color': 'rgb(102, 102, 102)'
            
            })
        
        //Check for Green background div and its CSS properties

        I.seeElement(this.objects.ModalUnitBackgroundGreenDiv)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundGreenDiv,
            {

                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'width': '320px',
                'height': '372px',
                'z-index': '10001',
                'opacity': '1',

            })

        //Check for Green background and its CSS properties

        I.seeElement(this.objects.ModalUnitBackgroundGreen)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundGreen,
            {

                'background-color': 'rgb(0, 153, 153)',

            })

        //Check for Blue background div and its CSS properties

        I.seeElement(this.objects.ModalUnitBackgroundBlueDiv)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundBlueDiv,
            {

                'position': 'absolute',
                'left': '5px',
                'top': '5px',
                'width': '310px',
                'height': '362px',
                'z-index': '10002',
                'opacity': '1',
    
            })
            
        //Check for Blue background and its CSS properties
            
        I.seeElement(this.objects.ModalUnitBackgroundBlue)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundBlue,
            {

                'background-color': 'rgb(0, 0, 204)',

            })
        
        //Check for Close button and its CSS properties

        I.seeElement(this.objects.CloseButtonModalUnit)
        I.seeCssPropertiesOnElements(this.objects.CloseButtonModalUnit,
            {

                'position': 'absolute',
                'top': '0px',
                'right': '0px',
                'z-index': '99999999'

            })

        //Check for Modal Unit Text and its CSS properties

        I.see('Modal Unit', this.objects.ModalUnitText)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitText,
            {

                'font-family': 'Arial',
                'font-style': 'normal',
                'font-weight': '400',
                'text-align': 'center',
                'font-size' : '34px',
                'color' :'rgb(255, 255, 255)'

            })

        //Check for Celtra logo div and its CSS properties
    
        I.seeElement(this.objects.ClickableLogoDiv)
        I.seeCssPropertiesOnElements(this.objects.ClickableLogoDiv,
            {

                'position': 'absolute',
                'left': '115px',
                'top': '327px',
                'width': '90px',
                'height': '40px',
                'z-index': '10004',
                'opacity': '1'

            })

        //Check for Celtra logo and its CSS properties

        I.seeElement(this.objects.CeltraLogoModalUnit)
        I.seeCssPropertiesOnElements(this.objects.CeltraLogoModalUnit,
            {

                'background-image': 'url("https://cache-ssl.celtra.com/api/blobs/2b573ab4a5c93f1b512a4f4f021529bd4310021926ce619c1e14606aa7828092/celtra-logo.png?transform=crush")'

            })

    },

    verifyPhoneDiv()
    {
        //Check for Phone div and its CSS properties

        I.seeCssPropertiesOnElements(this.objects.phoneDiv,
            {

                'visibility': 'visible',
                'height': '699px',
                'width': '390px',
                'padding-top': '0px',
                'padding-bottom': '0px',
                'border-radius': '90px',
                'margin-top': '28px',
                'z-index': '4',

                //Cant get this to work??

                /* 'box-shadow': '0 0 50px rgba(0, 0, 0, 0.8)',
                'background': 'linear-gradient(to right, #000000 0%, #262626 50%, #000000 100%)',
                'border-width': '89px 27px 104px 27px',
                'border-style': 'solid',
                'border-color': 'white',
                'border-image': 'url(img/preview/portrait/phone_border_medium_no_bar.png?0155709aedfe19e55a96) 89 27 104 27',
                */
                
                'background-clip': 'padding-box',
                'position': 'relative',
                'display': 'inline-block',
                'vertical-align': 'middle'

            })
    }

}
    