import { Channel, RequestStatus } from '../../constants'

export interface ReviewState {
  items: Review[]
  total: number
  filters: Filters
  page: number | null
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
  page: number | null
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
  page: number | null
}

export interface ReturnFetchPayload {
  total: number
}
