import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

interface FormButtonProps {
  text: string
  link: string
}

export function FormButton({ text, link }: FormButtonProps) {
  return (
    <Button background="#fb5607">
      <NextLink href={link}>{text}</NextLink>
    </Button>
  )
}
