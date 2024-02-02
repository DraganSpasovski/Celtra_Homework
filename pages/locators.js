const { I } = inject();

module.exports =  {

  // insert your this.objects and methods here

    objects:
    {
      bigDaddyIframe1: '//span[contains(@data-field,"frameUrl")]/iframe',
      bigDaddyIframe2: '//div[@class="notranslate"]/iframe',
      bigDaddyIframe3: '//*[@class="notranslate celtra-expanded-ad"]/iframe',
 
      ExpandableBackgroundBlue: '//*[@id="celtra-object-75"]/div',
      ExpandableBackgroundGreen: '//*[@id="celtra-object-69"]/div',
      ExpandableText: '//*[@id="celtra-object-76"]/div/div[1]',
      ExpandableButtonDiv: 'div#celtra-object-104',
     
      ExpandableCeltraLogo: '//*[@id="celtra-object-77"]/div',
 
      ModalUnitBackgroundBlue: '//*[@id="celtra-object-37"]/div',
      ModalUnitBackgroundGreen: '//*[@id="celtra-object-36"]/div',
      ModalUnitText: '//*[@id="celtra-object-38"]/div/div[1]',
 
      ClickableLogoDiv: '#celtra-object-41',
      CeltraLogoModalUnit: '//*[@id="celtra-object-41"]/div',

      CloseButtonModalUnit: '//*[@class="celtra-close-button touchable celtra-close-button-up"]'
    },

    
    verifyExpandable()
    {
      I.seeElement(this.objects.ExpandableBackgroundBlue)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundBlue,{

            'background-color': 'rgb(0, 0, 204)',
            'display':'block'

        })

        I.seeElement(this.objects.ExpandableBackgroundGreen)
        I.seeCssPropertiesOnElements(this.objects.ExpandableBackgroundGreen,{

            'background-color': 'rgb(0, 204, 204)',
            'display':'block'
            
        })
        
        I.seeElement(this.objects.ExpandableText)
        I.see('Expandable', this.objects.ExpandableText)
        I.seeCssPropertiesOnElements(this.objects.ExpandableText,{

            'font-family': 'Arial',
            'font-style': 'normal',
            'font-weight': '400',
            'text-align': 'left',
            'font-size' : '34px',
            'color' :'rgb(255, 255, 255)'
            
        })

        I.seeElement(this.objects.ExpandableCeltraLogo)
        I.seeCssPropertiesOnElements(this.objects.ExpandableCeltraLogo,{
            'background-image': 'url("https://cache-ssl.celtra.com/api/blobs/2b573ab4a5c93f1b512a4f4f021529bd4310021926ce619c1e14606aa7828092/celtra-logo.png?transform=crush")'
        })

        I.see('Expandable', this.objects.ExpandableText)
    },

    verifyModalUnit()
    {
      I.seeElement(this.objects.ModalUnitBackgroundGreen)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundGreen,{

            'background-color': 'rgb(0, 153, 153)',
            'display':'block'

        })


        I.seeElement(this.objects.ModalUnitBackgroundBlue)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitBackgroundBlue,{

            'background-color': 'rgb(0, 0, 204)',
            'display':'block'

        })
        
        I.seeElement(this.objects.CloseButtonModalUnit)

        I.see('Modal Unit', this.objects.ModalUnitText)
        I.seeCssPropertiesOnElements(this.objects.ModalUnitText,{

            'font-family': 'Arial',
            'font-style': 'normal',
            'font-weight': '400',
            'text-align': 'center',
            'font-size' : '34px',
            'color' :'rgb(255, 255, 255)'

        })

        I.seeElement(this.objects.ClickableLogoDiv)
        I.seeElement(this.objects.CeltraLogoModalUnit)
        I.seeCssPropertiesOnElements(this.objects.CeltraLogoModalUnit,{

            'background-image': 'url("https://cache-ssl.celtra.com/api/blobs/2b573ab4a5c93f1b512a4f4f021529bd4310021926ce619c1e14606aa7828092/celtra-logo.png?transform=crush")'

        })

    }

}
