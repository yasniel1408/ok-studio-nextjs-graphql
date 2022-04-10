import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
        
        *::-webkit-scrollbar {
            -webkit-appearance: none;
        }
        *::-webkit-scrollbar:vertical {
            width:7px;
        }
        *::-webkit-scrollbar-button:increment,*::-webkit-scrollbar-button {
            display: none;
        }
        *::-webkit-scrollbar:horizontal {
            height: 4px;
        }
        *::-webkit-scrollbar-thumb {
            background-color: #79797908;
            border-radius: 10px;
            border: 1px solid #f1f2f3;
        }
        *::-webkit-scrollbar-track {
            border-radius: 6px;
        }


        .input-group{
            position: relative !important;
            div{
                position: absolute !important;
                span{
                    margin-top: 4px !important;
                    margin-left: 4px !important;
                }
            }
            input{
                background: transparent;
                padding-left: 50px !important;
            }
            input:focus{
                background: transparent;
                padding-left: 50px !important;
            }
        }
`;
