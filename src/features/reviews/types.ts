import { Channel, RequestStatus } from '../../constants'

export interface ReviewState {
  items: Review[]
  filters: Filters
  page: number
  status: RequestStatus
  error: unknown
}

export interface Review {
  headline: string
  comment: string
  author: string
  positiveFeedback: null | string
  negativeFeedback: null | string
  score: number
  channel: Channel
  publishedAt: Date
}

export interface Filters {
  score: number | null
  channels: Channel[] | null
}

export interface PaginationPayload {
  page: number
}

export interface FilterPayload {
  filters: Filters
}

export interface ReturnFilterPayload {
  data: Review[]
  filters: Filters
}

export interface ReturnPaginationPayload {
  data: Review[]
  page: number
}
