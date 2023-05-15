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

            dataBox: {
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                width: 'min-content',
                alignSelf: 'flex-end',
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

            tempo: {
                width: '100%',
                textAlign: 'center',
                fontsize: '14px',
                color: '#797979',
            },

            notificacao: {
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },

            notificacaoNumero: {
                backgroundColor: '#1db95440',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                textAlign: 'center',
                fontWeight: '600',
                size: '10px',
            },

            chatProfile: {
                height: '70px',
                backgroundColor: '#1f1f1f',
                color: 'white',
                borderRadius: '8px 0px 0px 0px'
            },

            chatHeader: {
                display: "flex",
                flexDirection: "row",
                height: "70px",
                backgroundColor: '#313131',
                width: "100%",
                justifyContent: "space-between",
                borderRadius: '0px 8px 0px 0px',
                color: 'white',
            },

            dividerChat: {
                background: '#1f1f1f',
            },

            ultimaMensagem: {
                minWidth: '100%',
                fontSize: '14px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                color: '#ccc',
            },

            chatList: {
                background: 'red',
            },
        }
    )
}

export const chat = () => chatStyles();