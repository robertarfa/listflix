import styled from 'styled-components'

export const Main = styled.div`
max-width: 840px;
margin: 10px auto;
margin-bottom: 20px;
`
export const PageTitle = styled.div`
text-align: center;
`

export const ButtonContainer = styled.div`
width: 100%;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;

`

export const Button = styled.button`

  text-align: center;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.1;
  font-weight: normal;
  font-family: sans-serif;
  color: #FFFFFF;
  font-size: 12px;
  background-color: #DC1A28;
  background-image: -webkit-linear-gradient(top, #e11b29 0%, #d14e57 48%, #DC1A28 49%, #DC1A28 82%, #e62c39 100%);
  background-image: -moz-linear-gradient(top, #e11b29 0%, #d14e57 48%, #DC1A28 49%, #DC1A28 82%, #e62c39 100%);
  background-image: -o-linear-gradient(top, #e11b29 0%, #d14e57 48%, #DC1A28 49%, #DC1A28 82%, #e62c39 100%);
  background-image: linear-gradient(top, #e11b29 0%, #d14e57 48%, #DC1A28 49%, #DC1A28 82%, #e62c39 100%);
  border-color: hsl(356, 19%, 48%);
  -webkit-box-shadow: inset 0 0 1px 1px #eb5762, 0 0 1px 3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0 0 1px 1px #eb5762, 0 0 1px 3px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 1px 1px #eb5762, 0 0 1px 3px rgba(0, 0, 0, 0.15);
  -webkit-text-shadow: 1px 1px 1px #810f17;
  -moz-text-shadow: 1px 1px 1px #810f17;
  -o-text-shadow: 1px 1px 1px #810f17;
  text-shadow: 1px 1px 1px #810f17;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
  border-radius: 19px;
  padding: 10.8px 27px 10.8px 27px;

:strong {
  letter-spacing: 1px;
  font-size: 22px;
}

:hover {
  color: #FFFFFF;
  background-color: #e5212f;
  background-image: -webkit-linear-gradient(top, #e62633 0%, #d55a63 48%, #e5212f 49%, #e5212f 82%, #e83a47 100%);
  background-image: -moz-linear-gradient(top, #e62633 0%, #d55a63 48%, #e5212f 49%, #e5212f 82%, #e83a47 100%);
  background-image: -o-linear-gradient(top, #e62633 0%, #d55a63 48%, #e5212f 49%, #e5212f 82%, #e83a47 100%);
  background-image: linear-gradient(top, #e62633 0%, #d55a63 48%, #e5212f 49%, #e5212f 82%, #e83a47 100%);
  border-color: hsl(356, 20%, 51%);
  -webkit-box-shadow: inset 0 0 1px 1px #ec616b, 0 0 1px 3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0 0 1px 1px #ec616b, 0 0 1px 3px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 1px 1px #ec616b, 0 0 1px 3px rgba(0, 0, 0, 0.15);
  -webkit-text-shadow: 1px 1px 1px #8f111a;
  -moz-text-shadow: 1px 1px 1px #8f111a;
  -o-text-shadow: 1px 1px 1px #8f111a;
  text-shadow: 1px 1px 1px #8f111a;
}

:active {
  color: #FFFFFF;
  background-color: #ce1826;
  background-image: -webkit-linear-gradient(top, #c51724 0%, #DC1A28 100%);
  background-image: -moz-linear-gradient(top, #c51724 0%, #DC1A28 100%);
  background-image: -o-linear-gradient(top, #c51724 0%, #DC1A28 100%);
  background-image: linear-gradient(top, #c51724 0%, #DC1A28 100%);
  padding: 11.8px 27px 9.8px 27px;
}
:focus {
 outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
}
`