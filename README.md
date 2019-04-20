# focusedTomato
A pomodoro app with stats and cloud backup!

##Components-
####Canvas
* AppRouter -> 1. Header  2. Switch <PrivateRouter> 3. Footer
* Routes -> 1. ‘/’ <Signin> 2. ‘/focus’ <Focus>  3. ‘/tasks’ <Tasks>  4. ‘/stats’ <Stats> 5. ‘/settings’ <Settings>   6. <NotFoundPage>


* <Focus> -> 1. <Indicators> 2. <Clock>   3. <Button>  4. <TaskList> 5. <Sound>
* <Tasks> -> 1. <Button> 2. <ModalAddNewTask> 3. <ModalEditTask>
* <Settings> -> 1. <SettingItem>
* <Signin> -> No imported components
_________________________________________________________________________
* <Indicators> -> “props” -> active, inactive 
    No of active dots and no of inactive dots
    Further imports <Indicator> component
* <Button> -> “props” -> cssClass, clicked(props.task), task, icon, text
* <Clock> -> “props” -> percentage, min, sec
    Further imports 3rd party component - <CircularProgressbar> from 'react-circular-progressbar'
* <Footer> -> 1. <Link>  2.<Icon>
* <Icon> -> “props”  -> icon
* <ModalAddNewTask> -> “props” -> active, close, close()
    Further imports Modal from ‘react-modal’
* <ModalEditTask> ->  “props” -> active, close(), displayTask, oldTarget, removeTask()
* <SettingItem> -> “props” -> tag, check, onChange(), toggle, val
* <Sound> -> “props” -> ref
* <TaskList> -> “props” -> tasks, onTaskChange()
* <Header> -> “props” -> auth (true or false) according to auth status, cred(credentials object),  forwardRef(reference from Canvas component to control dropdown menu)
* <Login> -> “props” -> handleSign(), changeDisplay(‘reset’/’signup’)
* <Prompt> -> “props” -> icon, promptText, close()
* <Reset> -> “props” -> resetSent, handleReset(), changeDisplay()
* <Signup> -> “props” -> handleSign(), changeDisplay(‘reset’/’signup’)
