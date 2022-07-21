export interface ConsumerItemProps {
  name: string
  color: string
  message: string
  status: string
  lastConnection: string
  type?: "standard" | "inbox"
  containerClassName?: string
  selected?: "on" | "off"
}