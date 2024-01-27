import { ReactNode } from 'react'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  icon: ReactNode
  title: string
  subtitle: string
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </SectionTitleContainer>
  )
}
