import styled from 'styled-components';

const headerHeight = 70;

interface IItemImg {
    width?: string;
    height?: string;
    path?: string;
}

interface IColor {
    color?: string;
}

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
    color: ${({color}: IColor) => color || '#525252'};
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
    justify-content: center
`

export const ItemImg = styled.div`
    width: ${({ width }: IItemImg) => width || '290px'};
    height: ${({ height }: IItemImg) => height || '290px'};
    border-radius: 3px;
    background-image: ${({ path }: IItemImg) => `url(${path})`};
    background-repeat: no-repeat;
    background-size: cover;
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

export const RepoTitle = styled.h2`
    text-align: center;
    padding: 20px;
    font-weight: 700;
    color: black;
`;

export const ResumeItemWrapper = styled.div`
    border: 1px solid #ececec;
    width: 150px;
    border-radius: 5px;
    margin: 5px;
    font-size: 11px;
`;

export const ResumeListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    align-items: center;
`;

export const ResumeTitle = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    padding: 5px 2px;
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
    color: ${({color}: IColor) => color || '#0b4f90'};
`;