import styled from 'styled-components'


export const Container = styled.header`
    text-align: center;
    display: flex;
    justify-content: center;
    height: 1100px;
    background-color: #121214;
    
    .background {
        width: 1440px;
        background-color: #121214;
    }

    .content {
        position: absolute;
        z-index: 2;
    }

    header {
        padding-top: 32px;
        height: calc(120px + 32px);
        z-index: 5;

        div {
            width: 120px;
            margin: auto;
            background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);

            border-radius: 50%;

            display: flex;
            padding: 4px;

            transition: transform .3s;

            &:hover {
                transform: scale(1.1)  
            }
        }

        img {
            width: 100%;
            border-radius: 50%;
        }
    }
    ul {
        list-style: none; 
    }

    main {
        width: 580px;
        height: 264px;
        
        margin: 32px auto;

        display: grid;
        gap: 24px; 
    }

    section {
        background-image: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
        padding-top: 4px;
        border-radius: 10px;

        div {
            background-color: #2A2634;
            padding: 32px;
            padding-top: 24px;
            border-radius: 8px; 
        }

        h2 {
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            font-size: 24px;
            color: #fff;
            margin-bottom: 5px;
            text-align: left;
        }

        p {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #A1A1AA;
            text-align: left;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;

            margin-top: 24px;
        }

        ul li {
            transition: transform .3s;

            &:hover {
                transform: scale(1.1) 
            }
        }

        .games-list img {
            width: 90px;
            border-radius: 8px;
        }

        .channel-list img {
            border-radius: 50%; 
            width: 70px;
            border: 1px solid #443E54;
        }
    }
`