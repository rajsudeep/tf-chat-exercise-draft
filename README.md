# Chat App Exercise
This app was created off this [base template from MUI React Component Library](https://codesandbox.io/p/sandbox/github/mui/material-ui/tree/master/examples/material-ui-cra-ts?file=%2Fsrc%2FProTip.tsx)

## How to use

### codesandbox.io method:

You can open the code and application using codesandbox by opening this link [https://codesandbox.io/p/github/rajsudeep/tf-chat-exercise-draft](https://codesandbox.io/p/github/rajsudeep/tf-chat-exercise-draft/main?import=true&workspaceId=81299c84-cd93-4ac5-99ec-c51954c35682&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clzkxlsmm0006356iw5qycra8%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clzkxlsml0002356iq3up5oq1%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clzkxlsml0004356ikjyxpxfl%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clzkxlsmm0005356i7ta6e0zp%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clzkxlsml0002356iq3up5oq1%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzkxlsml0001356iqhahy090%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clzkxlsml0002356iq3up5oq1%2522%252C%2522activeTabId%2522%253A%2522clzkxlsml0001356iqhahy090%2522%257D%252C%2522clzkxlsmm0005356i7ta6e0zp%2522%253A%257B%2522id%2522%253A%2522clzkxlsmm0005356i7ta6e0zp%2522%252C%2522activeTabId%2522%253A%2522clzlivnd100043b6i9trjbzjj%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SETUP_TASKS%2522%252C%2522id%2522%253A%2522clzkxltq9000d356i07tvi93f%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A2222%252C%2522id%2522%253A%2522clzli5oww000u356i8rte9zh3%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522ENV_SETUP%2522%252C%2522id%2522%253A%2522clzlivnd100043b6i9trjbzjj%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clzkxlsml0004356ikjyxpxfl%2522%253A%257B%2522id%2522%253A%2522clzkxlsml0004356ikjyxpxfl%2522%252C%2522activeTabId%2522%253A%2522clzkxlsml0003356ize2mhvjo%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clzkxlsml0003356ize2mhvjo%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522NEW_TERMINAL%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clzkxlwc0000k356ikja5k39d%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D).

To have the preview (where you can see the demo of the application) run on port 3000, run "start" from the Dev Tools' "task" section as seen in the below image.

<img width="340" alt="Screen Shot 2024-08-08 at 10 04 08 AM" src="https://github.com/user-attachments/assets/143796e2-e0c7-405f-aae8-45e8c95c4465">

It will follow up with a popup in the bottom right corner, click on "Open Preview".

<img width="533" alt="Screen Shot 2024-08-08 at 10 53 24 AM" src="https://github.com/user-attachments/assets/8ef26e87-3717-41ee-a3f4-bd716c793ea5">


> [!NOTE]  
> If the preview of the application isn't working it could be because:
>  * The workspace has either package-lock.json or yarn.lock files. Please delete them and try to run "start" from the Dev Tools' Task section.

### local method:

To run it locally, clone the repo and run the following commands at the root of this project's directory:

```bash
npm install
npm start
```

> [!NOTE]  
> Recommended to go with the first method to avoid having to deal with module / library version conflicts and such. Feel free to contact me if there are any issues running the application regardless.

## React SDKs / Component Libraries Considered

I initially looked into PubNub and MinChat PubNub as they are popular libraries for building chat applications. They both offered features to build a robust chat app, but the components they offer were not flexible and that would have made it hard to show how I code and think through this exercise.

I then checked more flexible libraries such as Chakra UI, Ant Design, and Material-UI (MUI). Although all these libraries had a plethora of components and flexibility with styling and such, I ended up choosing MUI since I saw in their inventory that there were particular components that would cater really well for the needs of designing a chat application. It also helped to know that there were a lot of resources online with using MUI I could refer to (ie Stack Overflow posts, demos from MUI documents to refer to) in order to quickly pick up using it. The styling in MUI is also super flexible so it made it easy to follow the design I envisioned for the chat experience.

## Known Bugs and Improvements to Consider

- We right now assume the data's particpants has the main user of the session as the first item in the array. However, we would want to also control the state of the current user's session and use that to determine if it is appropriate to show their name in the header / in MessagingContainer but for the sake of simplicity of this exercise (ie we don't have a backend) we have hardcoded said state.
- We could have a better "no chat items in list" UI
- Needs loading states
- Needs error states
- Responsiveness wasn't prioritized, so needs to be further tested
- Accessibility wasn't prioritized, would need to be addded to this if required
- Probably need to switch to using userId for some keys / payloads since relying on "name" wouldn't be as reliable especially if we support groups/channels or have dups
- displayImg is a better name than profileImg to support groups and etc
- Consolidate to using one styling method (classNames or styles)
- urls are not linkable in message view
- Message view header has a MUI defined min-width attribute that isn't reachable from the styles prop so there is extra spacing between avatar and name
- Several areas need some more cosmetic love (especially the create chat popover)
- Needs tests !!!
