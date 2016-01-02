# DocMenu

## Installation
``` shell
$ yo rinjs:install-component

     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

You"re using the Atomic generator.
? git repository or relative path to /src/ git@github.com:jasonvillalon/doc-menugit@github.com:jasonvillalon/doc-menu.git
Cloning into 'doc-menu'...
   create ../variables.styl
   create ../variables.js
   create ../components.styl
   create ../../atomic.json
 conflict settings.js
? Overwrite settings.js? overwrite this and all others
    force settings.js
    force dependencies.js
DONE
```
## Usage

``` javascript
React.createClass({
  render() {
    try {
      let items = [
        {
          to: "/menu-1",
          title: "Menu 1",
        },
        {
          to: "/menu-2",
          title: "Menu 2",
          subItems: [
            {
              to: "/menu-2/level-2",
              title: "Menu 2 Level 2 Item 1",
              subItems: [
                {
                  to: "/menu-2/level-3/item-1",
                  title: "Menu 2 Level 3 Item 1"
                },
                {
                  to: "/menu-2/level-3/item-2",
                  title: "Menu 2 Level 3 Item 2"
                }
              ]
            }
          ]
        }
      ]
      return (
        <AtomicApp className="main">
          <DocMenu onItemClick={this.onItemClick} items={items}/>
        </AtomicApp>
      )
    } catch (err) {
      console.log(err)
    }
  }
})
```
