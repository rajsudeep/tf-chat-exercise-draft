# Chat App Exercise

## How to use

Please use the codesandbox.io link shared via email for easy access.

or

To run it locally, clone the repo and run the following commands at the root of this project's directory:

```bash
npm install
npm start
```

Feel free to email me if there are any issues running it.

## React SDKs / Component Libraries Considered

I initially looked into PubNub and MinChat PubNub as they are popular libraries for build chat applications. They both offered features to build a robust chat app, but the components they offer were not flexible and that would have made it hard to show how I code and think through this exercise.

I then checked more flexible libraries such as Chakra UI, Ant Design, and Material-UI (MUI). Although all these libraries had a plethora of components and flexibility with styling and such, I ended up choosing MUI since I saw in their inventory that there were particular components that would cater really well for the needs of designing a chat application. It also helped that to know there were a lot of resources online with using MUI I could refer to (ie Stack Overflow posts, demos from MUI documents to refer to) in order to quickly pick up using it.

## Known Bugs and Improvements to Consider

- We right now assume the data's particpants has the main user of the session as the first item in the array. However, we would want to also control the state of the current user's session and use that to determine if it is appropriate to show their name in the header / in MessagingContainer but for the sake of simplicity of this exercise we have hardcoded it said state.
- We could have a better no chat items in list state
- Needs loading states
- Needs error states
- Responsiveness wasn't prioritized, so needs to be further tested
- Accessibility wasn't prioritized
- Probably need to switch to using userId for some keys and payloads since relying on "name" wouldn't be as reliable especially if we support groups/channels or have dups
- displayImg is a better name than profileImg to support groups and etc
- Consolidate to using one styling method (classNames or styles)
- urls are not linkable in message view
- Message view header has a Mui defined min-width attribute that isn't reachable from the styles prop so there is extra spacing between avatar and name
- Several areas need some more cosmetic love (especially the create chat popover)
- Needs tests !!!
