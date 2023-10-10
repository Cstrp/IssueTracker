import { notification } from 'antd'

interface Notifier {
  type: 'success' | 'info' | 'warning' | 'error'
  message: string
  description: string
}

export const notifier = ({ type, description, message }: Notifier) => {
  notification.config({ closeIcon: false, maxCount: 3, placement: 'bottomRight', duration: 3 })

  notification[type]({ message, description, icon: false })
}
