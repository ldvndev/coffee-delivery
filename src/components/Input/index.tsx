import { InputHTMLAttributes } from 'react'
import { InputContent, InputStyled, RightText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export function Input({ rightText, ...props }: InputProps) {
  return (
    <InputContent>
      <InputStyled {...props} />
      {rightText && <RightText>{rightText}</RightText>}
    </InputContent>
  )
}
