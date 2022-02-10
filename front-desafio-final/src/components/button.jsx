import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import useGlobal from '../hooks/useGlobal';

const ColorButton = styled(Button)(({ theme, onClick }) => ({
  onClick: onClick.apply,
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700]
  }
}));


function CustomButton(text, Handle) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton
        variant="contained"
        onClick={() => {
          const email = document.querySelector(
            '#outlined-start-adornment'
          ).value;
          const senha = document.querySelector(
            '#outlined-adornment-password'
          ).value;
          Handle(email, senha);
        }}
      >
        {text}
      </ColorButton>
    </Stack>
  );
}
export default CustomButton;