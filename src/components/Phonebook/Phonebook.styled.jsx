import styled from 'styled-components';


export const ContactBox = styled.div`

`;

export const ContactList = styled.ul`
margin: ${p => p.theme.space[0]}px;
font-size: ${p => p.theme.fontSizes.l}px;
color: ${p => p.theme.colors.text};
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center; 
`;
export const Point = styled.span`
    padding: 2px 2px;  
    margin-right: ${p => p.theme.space[3]}px;
    background-color: ${p => p.theme.colors.text}};
`;
    
export const ContactName = styled.p`
font-size: 20px;
color: ${p => p.theme.colors.text};
`;

export const DeleteButton = styled.button`
width: 10%;
cursor: pointer;
margin: ${p => p.theme.space[0]}px;
margin-left: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[0]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.background};    
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: ${p => p.theme.shadows.profile};

:hover, 
:focus{ 
    background-color: ${p => p.theme.colors.hover}};
    
`;
