export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          createdAt: string
          endDate: string | null
          id: string
          name: string
          startDate: string | null
          surname: string
          team: string | null
        }
        Insert: {
          createdAt?: string
          endDate?: string | null
          id?: string
          name: string
          startDate?: string | null
          surname: string
          team?: string | null
        }
        Update: {
          createdAt?: string
          endDate?: string | null
          id?: string
          name?: string
          startDate?: string | null
          surname?: string
          team?: string | null
        }
      }
      teams: {
        Row: {
          createdAt: string | null
          id: string
          name: string | null
          parentTeam: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          name?: string | null
          parentTeam?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          name?: string | null
          parentTeam?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
