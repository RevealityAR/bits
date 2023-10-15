import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  buttonCSS,
  form__groupCSS,
  form__fieldCSS,
  form__labelCSS,
  formCSS,
} from './styles'
import { useTheme } from '@emotion/react'
import SendIcon from '@mui/icons-material/Send'
import { InputAdornment } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Cookies from 'universal-cookie'

interface OwnProps {
  uniqueId: string
  mailchimpURL: string
  uniqueAntiSpamId: string
}

export default function emailListForm({
  uniqueId,
  mailchimpURL,
  uniqueAntiSpamId,
}: OwnProps) {
  const theme = useTheme()
  return (
    <Box
      component="form"
      action={mailchimpURL}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      sx={{
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <TextField
        sx={{ width: '20rem', maxWidth: '70vw' }}
        id={uniqueId}
        label="Enter your email address"
        variant="outlined"
        required
        type="email"
        autoComplete="email"
        name="EMAIL"
        onChange={(e) => {
          new Cookies().set('subEmail', e.target.value, { sameSite: 'strict' })
          // console.log(new Cookies().get('subEmail')); // Prod test
        }}
      />
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <TextField type="text" name={uniqueAntiSpamId} value="true" />
      </div>
      <IconButton
        type="submit"
        sx={{
          width: '4rem',
          marginLeft: '0.5rem',
          backgroundColor: theme.palette.primary.main,
          borderRadius: '4px',
          color: 'white',
          svg: { transition: 'all 100ms linear' },
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            svg: { transform: 'scale(1.15)' },
          },
        }}
        name="subscribe"
        value="Subscribe"
        id="mc-embedded-subscribe"
      >
        <SendIcon />
      </IconButton>
    </Box>
  )
}
