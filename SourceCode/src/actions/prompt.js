
export const addPrompt = ({
    prompt = false,
    promptIcon = '',
    promptText ='',
    passReset= false,
    onConfirm = ()=>{}
}) => {
    return {
        type: 'NEW__PROMPT',
        prompt,
        promptIcon,
        promptText,
        passReset,
        onConfirm
    }
}

export const addSignupPrompt = () => {
    return {
        type: 'NEW__PROMPT',
        prompt: true,
        promptIcon: 'envelope',
        promptText: 'You have successfully signed-up, soon you will receive a verification mail to confirm your email!',
        passReset: false,
        onConfirm: ()=>{}
    }
}

export const resetPrompt = () => {
    return {
        type: 'NEW__PROMPT',
        prompt : false,
        promptIcon : '',
        promptText : '',
        passReset : false,
        onConfirm : ()=>{}
    }
}