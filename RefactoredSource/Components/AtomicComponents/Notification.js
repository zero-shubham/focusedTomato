class Notification{
    constructor(){
        window.Notification.requestPermission((permission) => {
            if(!(window.Notification.permission)){
                window.Notification.permission = permission;
            }
        });
    }

    sendNotification = (msg) => {
        try{
            if(window.Notification.permission === 'granted'){
                this.notification = new window.Notification('FocusedTomato',{
                    body: msg
                });
                this.notification.onclick = () => {
                    window.focus();
                }
            }
        }catch{}
    }
}

export default Notification;