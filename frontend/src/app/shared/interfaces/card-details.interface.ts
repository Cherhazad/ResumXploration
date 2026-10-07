import {SafeValue} from '@angular/platform-browser';

type CardType = 'text' | 'icon' | 'image'

export interface CardDetails {
  id: string
  header?: string
  subHeader?: string
  content?: string
  type: CardType
  colSpan?: number
  rowSpan?: number
  icon?: string
  image?: string | SafeValue
  headerSize?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'default' | 'primary' | 'success' | 'warning',
  footerContent?: string[]
}
