// 服务项目
export interface ServiceItem {
  icon: string
  title: string
  desc: string
  price: string
  tag?: string
}

// 流程步骤
export interface HowStep {
  title: string
  desc: string
}

// 评价
export interface ReviewItem {
  text: string
  name: string
  role: string
  avatar: string
  avatarBg: string
}

// 预约表单字段
export interface BookingFields {
  ownerName: string
  ownerNamePlaceholder: string
  phone: string
  phonePlaceholder: string
  petName: string
  petNamePlaceholder: string
  petType: string
  petTypePlaceholder: string
  petTypes: string[]
  service: string
  servicePlaceholder: string
  services: string[]
  date: string
}

// 联系方式
export interface ContactInfo {
  phone: string
  email: string
  address: string
  weekday: string
  weekend: string
}

// 预约表单状态
export interface BookingFormState {
  ownerName: string
  phone: string
  petName: string
  petType: string
  service: string
  date: string
}

// Toast 状态
export interface ToastState {
  message: string
  color: string
  show: boolean
}

// 导航链接
export interface NavLink {
  href: string
  label: string
}

// 卡片强调色
export interface CardAccent {
  accent: string
  iconBg: string
}
