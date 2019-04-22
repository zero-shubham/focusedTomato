class Notification{
    constructor(){
        window.Notification.requestPermission((permission) => {
            if(!(window.Notification.permission)){
                window.Notification.permission = permission;
            }
        });
    }

    sendNotification = (msg) => {
        if(window.Notification.permission === 'granted'){
            this.notification = new window.Notification('FocusedTomato',{
                body: msg
            });
        }
        this.notification.onclick = () => {
            window.focus();
        }
    }
}

export default Notification;