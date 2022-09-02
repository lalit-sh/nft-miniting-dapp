
export const setFlashMessage = ({type, title, message}) => d => {
    d({
        type: 'SET_FLASH_MESSAGE',
        payload: {
            type, message, title
        }
    })
}

export const clearFlashMessage = () => d => {
    d({
        type: 'CLEAR_FLASH_MESSAGE'
    })
};