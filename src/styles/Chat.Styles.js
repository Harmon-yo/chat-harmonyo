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
                backgroundColor: '#F5F4F7',
            },

            chatContainer: {
                backgroundColor: 'white',
                display: 'flex',
                width: '100%',
                height: '100%',
                         },

            chatLeft: {
                background: ' #F5F4F7',
                display: 'flex',
                flexDirection: 'column',
                width: '30%',
                overflowY: 'auto',
            },

            chatItem: {
                alignItems: 'flex-start',
                width: '100%',
                flexDirection: 'row',
                background: 'rgba(0,0,0,0)',
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
                fontSize: '14px'
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
                backgroundColor: '#03a33b',
                color: 'white',
            },

            chatHeader: {
                display: 'flex',
                flexDirection: 'row',
                height: '70px',
                backgroundColor: '#03B441',
                width: '100%',
                justifyContent: 'space-between',
                color: 'white',
            },

            dividerChat: {
                background: '#F5F4F7',
            },

            ultimaMensagem: {
                minWidth: '100%',
                fontSize: '14px',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                color: '#383838',
            },

            voltar: {
                display: 'flex',
                justifyContent: 'left',
                width: '50px',
                height: '40px',
                padding: '0px',
            },

            setaVoltar: {
                width: '35px',
                height: '35px',
                padding: '5px',
                borderRadius: '100%',
                background: '#363636',
            },

            btnDenuncia: {
                color: 'white', 
                width: 'min-content', 
                fontSize: '40px',
            },

            backgroundBloqueado: {
                display: "flex",
                width: "100%",
                backgroundColor: "#03B441",
                height: "20%",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center"
                
            },

            textoBloqueado:{
                fontSize: "18px",
                fontWeight: "550",
                fontFamily: 'Arial, Helvetica, sans-serif',
                textAlign: "center"
            }
        }
    )
}

export const chat = () => chatStyles();