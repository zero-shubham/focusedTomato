
export const addPrompt = ({
    prompt = false,
    promptIcon = '',
    promptText ='',
}) => {
    return {
        type: 'NEW__PROMPT',
        prompt,
        promptIcon,
        promptText
    }
}

export const addSignupPrompt = () => {
    return {
        type: 'NEW__PROMPT',
        prompt: true,
        promptIcon: 'envelope',
        promptText: 'You have successfully signed-up, soon you will receive a verification mail to confirm your email! You may sign-in now.'
    }
}

export const resetPrompt = () => {
    return {
        type: 'NEW__PROMPT',
        prompt : false,
        promptIcon : '',
        promptText : ''
    }
}

