
import styled from 'styled-components';




export const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 40vw;
max-width: 600px;
min-width: 300px;

`


export const StyledInput = styled.input`
display: flex;
width: 100%;
height: 6vh;
max-height:40px;
margin-top: 5px;
margin-bottom: 10px;

background: #0c0c0c;
border-color: white;
border-width: 2px;
border-style: solid;
color: white;

`

export const StyledTextArea = styled.textarea`
display: flex;
width: 100%;
margin-top: 5px;
margin-bottom: 10px;
height: 10vh;
max-height:120px;
background: #0c0c0c;
border-color: white;
border-width: 2px;
border-style: solid;
color: white;
resize: none;
`


export const StyledButton = styled.button`
white-space: nowrap;
padding: 8px 12px;
font-size: 20px;
color: white;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
border:none;
border:solid 2px white;
border-radius: 5px;
background: rgba(255, 255, 255,0);
text-decoration: none;
max-width: 129px;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #ffffff;
  color: black;
}

&:disabled {
  opacity: 0.3;
}

`

export const StyledError = styled.div`


`

