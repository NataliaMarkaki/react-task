## My Approach

After examining both the screens and the description, I decided to follow
this approach:
```javascript
components/
  AddJargonFormComponent.js
  FilterJargonComponent.js
  FilterJargonLinkComponent.js
  Title.js
  VisibleJargonListComponent.js
  VisibleJargonListItemComponent.js
```
The best way to explain the structure is with a visual representation.
```javascript
Black: Title.js
Red: AddJargonFormComponent.js
Blue: FilterJargonComponent.js
Orange: FilterJargonLinkComponent.js
Green: VisibleJargonListComponent.js
Purple: VisibleJargonListItemComponent.js
```
![alt text](./screens/5-jargon-page-add-item-3.png "Component Structure")

This way all actions of children components can be managed by their parent and they are reusable.
