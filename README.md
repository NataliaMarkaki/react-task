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

### Test Scenarios

I decided to implement AddJargonFormComponent. The following scenarios need to be tested:
* Button disables if the name field is empty
* Button disables if the dscription field is empty
* Button disables if the name already exist
* Warning appears if the name exists
* Already registered Jargon reminders appear
* If the name and description are valid, button appears and successfully submits the new Jargon

### Internal vs Global State

In the component I created, the component uses internal state for actions that don't interfere with
the global state and other components don't need to know about. For example, the possible matches of
Jargon don't affect the other components, if everything is handled correctly inside the component.

On the other hand, if a new Jargon is added that's an action that affects every other component, therefore
the onClick function should be provided using Redux, which will inform the global state.
Same goes for the Jargon list as well, since most components perform transforming actions.

### Note

I didn't want to spend a large amount of time on the component so it definitely needs optimisation.
This should be enough though to get an idea of my coding style.
