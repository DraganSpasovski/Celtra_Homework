const { I } = inject();

module.exports =  {

  // insert your this.objects and methods here

    objects:
    {
      bigDaddyIframe1: '//span[contains(@data-field,"frameUrl")]/iframe',
      bigDaddyIframe2: '//div[@class="notranslate"]/iframe',
      bigDaddyIframe3: '//*[@class="notranslate celtra-expanded-ad"]/iframe',

      phoneDiv: '//div[@data-field="device"]',
        
      ExpandableBackgroundBlueDiv: '//div[@id="celtra-object-75"]',
      ExpandableBackgroundBlue: '//*[@id="celtra-object-75"]/div',
      ExpandableBackgroundGreenDiv: '//div[@id="celtra-object-69"]',
      ExpandableBackgroundGreen: '//*[@id="celtra-object-69"]/div',
      ExpandableTextDiv: '#celtra-object-76',
      ExpandableText: '//*[@id="celtra-object-76"]/div/div[1]',
      ExpandableButtonDiv: 'div#celtra-object-104',
     
      ExpandableCeltraLogoDiv: '#celtra-object-77',
      ExpandableCeltraLogo: '//*[@id="celtra-object-77"]/div',

 
      ModalUnitBackgroundGrayDiv: 'div#celtra-modal',
      ModalUnitBackgroundBlue: '//*[@id="celtra-object-37"]/div',
      ModalUnitBackgroundGreen: '//*[@id="celtra-object-36"]/div',
      ModalUnitText: '//*[@id="celtra-object-38"]/div/div[1]',
 
      ClickableLogoDiv: '#celtra-object-41',
      CeltraLogoModalUnit: '//*[@id="celtra-object-41"]/div',

      CloseButtonModalUnit: '//*[@class="celtra-close-button touchable celtra-close-button-up"]'
    },

    
    verifyExpandable()
    {
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


        I.seeElement(this.objects.ExpandableBackgroundBlue)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundBlue,
            {

                'background-color': 'rgb(0, 0, 204)',
                'display':'block'

            })

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

        I.seeElement(this.objects.ExpandableBackgroundGreen)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundGreen,
            {

                'background-color': 'rgb(0, 204, 204)',
                'display':'block'
            
            })
        
        I.seeCssPropertiesOnElements(this.objects.ExpandableTextDiv,
            {

                'position': 'absolute',
                'left': '0px',
                'top': '0px',
                'z-index': '10005',
                'opacity': '1',

            })

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

        I.seeElement(this.objects.ExpandableCeltraLogo)
        I.seeCssPropertiesOnElements(this.objects.ExpandableCeltraLogo,
            {

                'background-image': 'url("https://cache-ssl.celtra.com/api/blobs/2b573ab4a5c93f1b512a4f4f021529bd4310021926ce619c1e14606aa7828092/celtra-logo.png?transform=crush")'
            
            })

        I.see('Expandable', this.objects.ExpandableText)
    },

    verifyModalUnit()
    {
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundGrayDiv, 
            {

                'background-color': 'rgb(102, 102, 102)'
            
            })
        I.seeElement(this.objects.ModalUnitBackgroundGreen)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundGreen,
            {

                'background-color': 'rgb(0, 153, 153)',
                'display':'block'

            })


        I.seeElement(this.objects.ModalUnitBackgroundBlue)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundBlue,
            {

                'background-color': 'rgb(0, 0, 204)',
                'display':'block'

            })
        
        I.seeElement(this.objects.CloseButtonModalUnit)

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

        I.seeElement(this.objects.ClickableLogoDiv)
        I.seeElement(this.objects.CeltraLogoModalUnit)
        I.seeCssPropertiesOnElements(this.objects.CeltraLogoModalUnit,
            {

                'background-image': 'url("https://cache-ssl.celtra.com/api/blobs/2b573ab4a5c93f1b512a4f4f021529bd4310021926ce619c1e14606aa7828092/celtra-logo.png?transform=crush")'

            })

    },

    verifyPhoneDiv()
    {
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
    