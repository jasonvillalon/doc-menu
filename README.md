# DocMenu

## Installation
``` shell
$ yo rinjs:install-component
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
