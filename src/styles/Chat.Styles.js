// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

const chatStyles = () => {
    return (
        {
            chatPage: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#1db954',
            },

            chatContainer: {
                backgroundColor: 'white',
                display: 'flex',
                width: '97%',
                height: '93%',
                borderRadius: '8px',
                boxShadow: '#1f1f1f 5px 5px 8px',
            },

            chatLeft: {
                display: "flex",
                flexDirection: "column",
                width: "30%",
                overflowY: "auto",
                height: "max-content",
            },

            chatListContainer: {
                overflowY: 'auto',
                height: 'max-content',
                width: '100%',
            },

            messageContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
            },

            emptyChat: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '20px',
                color: '#1f1f1f',
                padding: '10px',
            },

            messageBoxContainer: {
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            },

            dataNotificacao: {
                width: 'min-content',
                height: 'min-content',
                alignSelf: 'flex-end',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                fontSize: "14px"
            },

            chatProfile:{
                height: '70px',
                backgroundColor: '#1f1f1f',
                color: 'white',
                borderRadius: '8px 0px 0px 0px'
            },
        }
    )
}

export const chat = () => chatStyles();