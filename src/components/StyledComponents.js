import styled from 'styled-components';

const headerHeight = 70;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: ${headerHeight}px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #bdbdbd;
    h1 {
        margin: 0;
    }
`;

export const Title = styled.h1`
    display: inline-block;
    color: ${({color}) => color || '#525252'};
    font-weight: 500 !important;
    @media(max-width: 768px) {
       font-size: 17px;
    }
`;

export const RepoContainerWrapper = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RepoListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    align-items: baseline;
    padding: 30px 0;
    @media(max-width: 768px) {
        padding: 40px 0;
    }
`;

export const CenterContainer = styled.div`
    width: 100%;
    height: calc(100vh - 350px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.p`
    font-size: 18px;
    padding: 10px;
    color: ${({color}) => color || '#0b4f90'};
`;

export const ReadMeSection = styled.section`
    width: 80%;
    margin: 40px auto;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    padding: 30px;
    *{
        max-width:100%
    }
`;